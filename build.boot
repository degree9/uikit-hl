(defn get-deps    []     (-> "./dependencies.edn" slurp read-string))
;(defn get-devdeps []     (read-file "./dev_dependencies.edn"))

(set-env! :dependencies (get-deps))

(require
 '[adzerk.boot-cljs :refer :all]
 '[degree9.boot-semver :refer :all]
 '[hoplon.boot-hoplon :refer :all])

(task-options!
 pom    {:project 'degree9/uikit-hl
         :description "UIKit Components for Hoplon."
         :url "https://github.com/degree9/uikit-hl"
         :scm {:url "https://github.com/degree9/uikit-hl"}})

(deftask docs
  "Build project documentation."
  []
  (merge-env! :source-paths #{"src"} :asset-paths #{"assets"})
  (comp
    (hoplon)
    (cljs)
    (target :dir #{"docs"})))

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
             :build 'snapshot)
    (sift :include #{#"uikit_hl/(.*).cljs$"})
    (watch)
    (target :dir #{"target"})
    (build-jar)))
