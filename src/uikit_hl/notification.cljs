(ns uikit-hl.notification
  (:require [uikit-hl.core :as uk]))

(defn notification [opts]
  (.notification uk/uikit (clj->js opts)))
