(ns uikit-hl.tab
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-tab* "")
(def ^:dynamic *bottom* nil)

(def ^:dynamic *active*   nil)
(def ^:dynamic *disabled* nil)

(def ^:dynamic *title* nil)
(def ^:dynamic *href* nil)

(defmethod hl/do! :uk-tab
  [elem _ v]
  (.tab js/UIkit elem (clj->js v)))


(hl/defelem tab [attr kids]
  (let [tab    (:uk-tab attr *uk-tab*)
        bottom (:bottom attr *bottom*)
        attr   (-> attr
                (assoc  :uk-tab tab)
                (dissoc :bottom))]
    (hl/ul (core/assoc-class attr {:uk-tab        true
                                   :uk-tab-bottom bottom}) kids)))

(hl/defelem item [attr kids]
  (let [active   (:active   attr *active*)
        disabled (:disabled attr *disabled*)
        title    (:title    attr *title*)
        href     (:href     attr *href*)
        attr     (dissoc    attr :active :disabled :title :href)]
    (hl/li (core/assoc-class attr {:active   active
                                   :disabled disabled}) [(hl/a :href href title) kids])))
