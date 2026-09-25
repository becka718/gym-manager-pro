import { create } from 'zustand'

export const useStore = create((set) => ({
  members: [],
  waitlist: [],
  revenue: {
    current: 0,
    expected: 0,
  },
  setMembers: (members) => set({ members }),
  setWaitlist: (waitlist) => set({ waitlist }),
  setRevenue: (revenue) => set({ revenue }),
  addMember: (member) => set((state) => ({
    members: [...state.members, member],
  })),
  addWaitlist: (email) => set((state) => ({
    waitlist: [...state.waitlist, { email, createdAt: new Date() }],
  })),
}))