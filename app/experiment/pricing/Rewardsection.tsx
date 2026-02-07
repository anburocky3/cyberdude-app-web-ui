import {
    Trophy,
    Zap,
    Target,
    Users,
    Flame,
    Medal,
    Crown,
    Star,
    TrendingUp,
} from "lucide-react";

const RewardsSection = () => {
    const earnXP = [
        { action: "Complete a lesson", xp: "+10 XP", icon: Target },
        { action: "Pass quiz first try", xp: "+25 XP", icon: Zap },
        { action: "Maintain 7-day streak", xp: "+50 XP", icon: Flame },
        { action: "Help peer in community", xp: "+15 XP", icon: Users },
        { action: "Complete project", xp: "+100 XP", icon: Trophy },
        { action: "Earn certification", xp: "+500 XP", icon: Medal },
    ];

    const beltLevels = [
        { belt: "White Belt", xp: "0 - 500 XP", color: "from-gray-400 to-gray-600", icon: "🥋" },
        { belt: "Yellow Belt", xp: "500 - 2,000 XP", color: "from-yellow-400 to-yellow-600", icon: "🟡" },
        { belt: "Brown Belt", xp: "2,000 - 10,000 XP", color: "from-amber-600 to-amber-800", icon: "🟤" },
        { belt: "Black Belt", xp: "10,000+ XP", color: "from-gray-800 to-black", icon: "⬛" },
    ];

    const leaderboardData = [
        { rank: 1, name: "Arun K.", xp: "15,420", streak: 45, badge: "🏆" },
        { rank: 2, name: "Priya S.", xp: "14,890", streak: 38, badge: "🥈" },
        { rank: 3, name: "Rahul M.", xp: "13,250", streak: 52, badge: "🥉" },
        { rank: 4, name: "Deepa V.", xp: "12,100", streak: 28, badge: "" },
        { rank: 5, name: "Karthik R.", xp: "11,580", streak: 33, badge: "" },
    ];

    return (
        <section id="rewards" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-b from-background via-accent/5 to-background" />
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                        <Trophy className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-accent">Gamified Engagement</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text-reward glow-text-green">Rewards & Recognition</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Stay motivated with our gamified learning experience. Earn CyberCoins, climb the ranks,
                        and get recognized for your consistency and achievements.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Earn XP Card */}
                    <div className="lg:col-span-2 p-8 rounded-2xl bg-card border border-border">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-semibold text-foreground">Earn CyberCoins & XP</h3>
                                <p className="text-sm text-muted-foreground">Complete actions to level up</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {earnXP.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                            <item.icon className="w-5 h-5 text-accent" />
                                        </div>
                                        <span className="text-foreground">{item.action}</span>
                                    </div>
                                    <span className="font-display font-bold text-accent">{item.xp}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Streak Card */}
                    <div className="p-8 rounded-2xl bg-linear-to-br from-accent/10 to-primary/10 border border-accent/20">
                        <div className="text-center mb-6">
                            <Flame className="w-16 h-16 text-cyber-orange mx-auto mb-4 animate-pulse-glow" />
                            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Learning Streak</h3>
                            <p className="text-sm text-muted-foreground">Consistency is key to success</p>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm text-center">
                                <div className="font-display text-4xl font-bold gradient-text-reward mb-1">7 Days</div>
                                <div className="text-sm text-muted-foreground">Weekly bonus unlocked!</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm text-center">
                                <div className="font-display text-4xl font-bold gradient-text mb-1">30 Days</div>
                                <div className="text-sm text-muted-foreground">Monthly champion badge</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Belt System */}
                <div className="p-8 rounded-2xl bg-card border border-border mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Medal className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-display text-xl font-semibold text-foreground">Belt System</h3>
                            <p className="text-sm text-muted-foreground">Progress through skill levels</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {beltLevels.map((level, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all card-hover text-center"
                            >
                                <div className="text-4xl mb-3">{level.icon}</div>
                                <div className={`inline-block px-4 py-1 rounded-full bg-linear-to-r ${level.color} text-white font-display font-semibold text-sm mb-2`}>
                                    {level.belt}
                                </div>
                                <div className="text-sm text-muted-foreground">{level.xp}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 rounded-xl bg-accent/10 border border-accent/20">
                        <div className="flex items-center gap-3">
                            <Star className="w-5 h-5 text-accent" />
                            <p className="text-sm text-muted-foreground">
                                <span className="text-accent font-medium">Belt levels signal:</span> Skill maturity, learning discipline, and community contribution
                            </p>
                        </div>
                    </div>
                </div>

                {/* Leaderboard */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-cyber-orange/10 flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-cyber-orange" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-semibold text-foreground">Weekly Leaderboard</h3>
                                    <p className="text-sm text-muted-foreground">Top performers this week</p>
                                </div>
                            </div>
                            <button className="hover:bg-accent/10 hover:text-accent-foreground h-9 rounded-md px-4">View All</button>
                        </div>

                        <div className="space-y-3">
                            {leaderboardData.map((user, index) => (
                                <div key={index} className={`flex items-center justify-between p-4 rounded-xl ${index < 3 ? 'bg-linear-to-r from-accent/10 to-transparent' : 'bg-secondary/30'}`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-bold ${index < 3 ? 'bg-accent/20 text-accent' : 'bg-secondary text-muted-foreground'}`}>
                                            {user.badge || user.rank}
                                        </div>
                                        <div>
                                            <div className="font-medium text-foreground">{user.name}</div>
                                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Flame className="w-3 h-3 text-cyber-orange" />
                                                {user.streak} day streak
                                            </div>
                                        </div>
                                    </div>
                                    <div className="font-display font-bold text-accent">{user.xp} XP</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl bg-linear-to-br from-primary/10 via-accent/10 to-cyber-purple/10 border border-primary/20 flex flex-col justify-center">
                        <div className="text-center">
                            <Crown className="w-20 h-20 text-primary mx-auto mb-6 animate-float" />
                            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Why Gamification?</h3>
                            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                Learning fails when motivation fades. Our reward system keeps you consistent,
                                visible, and connected to a community of achievers.
                            </p>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm">
                                    <div className="font-display text-2xl font-bold text-primary mb-1">40%</div>
                                    <div className="text-xs text-muted-foreground">Lower dropout</div>
                                </div>
                                <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm">
                                    <div className="font-display text-2xl font-bold text-accent mb-1">3x</div>
                                    <div className="text-xs text-muted-foreground">More engagement</div>
                                </div>
                                <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm">
                                    <div className="font-display text-2xl font-bold text-cyber-purple mb-1">95%</div>
                                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RewardsSection;
