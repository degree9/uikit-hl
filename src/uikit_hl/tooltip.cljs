(ns uikit-hl.tooltip
  (:require [hoplon.core :as h]))

(defmethod h/do! :uk-tooltip
  [elem _ v]
  (.tooltip js/UIkit elem (clj->js v)))
