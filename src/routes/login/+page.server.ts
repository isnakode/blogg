import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
   default: async (e) => {
      return redirect(303, '/dashboard')
   }
};