(defn get-deps    []     (-> "./dependencies.edn" slurp read-string))
;(defn get-devdeps []     (read-file "./dev_dependencies.edn"))

(set-env! :dependencies (get-deps))

(require
 '[degree9.boot-semver :refer :all])

(task-options!
 pom    {:project 'degree9/uikit-hl
         :description "UIKit Components for Hoplon."
         :url "https://github.com/degree9/uikit-hl"
         :scm {:url "https://github.com/degree9/uikit-hl"}})

(deftask deploy
  "Build project for deployment to clojars."
  []
  (comp
    (version)
    (build-jar)
    (push-release)))

(deftask develop
  "Build project for development."
  []
  (merge-env! :resource-paths #{"src"})
  (comp
    (version :develop true
             :pre-release 'snapshot)
    (sift :include #{#"uikit_hl/(.*).clj[s]?$"})
    (watch)
    (target :dir #{"target"})
    (build-jar)))
