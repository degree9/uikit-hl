(ns uikit-hl.column
  (:require [clojure.string :as s]
            [hoplon.core :as h]
            [hoplon.jquery]))

(defn- format-column [column]
  (-> (str "uk-" column)
    (s/replace "-s" "@s")
    (s/replace "-m" "@m")
    (s/replace "-l" "@l")
    (s/replace "-xl" "@xl")))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-column (name kw)) v}))
