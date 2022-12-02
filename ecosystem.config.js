module.exports = {
    apps: [
        {
            name: "eagle_bot",
            script: "node_modules/next/dist/bin/next",
            args: "dev",
            interpreter: "bash",
            instances: 1,
            exec_mode: "cluster",
            watch: true,
            env: {
                NODE_ENV: 'development'
            }
        }
    ]
}