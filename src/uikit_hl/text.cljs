(ns uikit-hl.text
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *lead* nil)
(def ^:dynamic *meta* nil)

(def ^:dynamic *small* nil)
(def ^:dynamic *large* nil)

(def ^:dynamic *bold* nil)

(def ^:dynamic *uppercase*  nil)
(def ^:dynamic *capitalize* nil)
(def ^:dynamic *lowercase*  nil)

(def ^:dynamic *muted*   nil)
(def ^:dynamic *primary* nil)
(def ^:dynamic *success* nil)
(def ^:dynamic *warning* nil)
(def ^:dynamic *danger*  nil)

(def ^:dynamic *background* nil)

(def ^:dynamic *left*    nil)
(def ^:dynamic *right*   nil)
(def ^:dynamic *center*  nil)
(def ^:dynamic *justify* nil)

(def ^:dynamic *top*      nil)
(def ^:dynamic *middle*   nil)
(def ^:dynamic *bottom*   nil)
(def ^:dynamic *baseline* nil)

(def ^:dynamic *truncate* nil)
(def ^:dynamic *break*    nil)
(def ^:dynamic *nowrap*   nil)

(hl/defelem text [attr kids]
  (let [lead       (:lead        attr *lead*)
        meta       (:meta        attr *meta*)
        small      (:small       attr *small*)
        large      (:large       attr *large*)
        bold       (:bold        attr *bold*)
        uppercase  (:uppercase   attr *uppercase*)
        capitalize (:capitalize  attr *capitalize*)
        lowercase  (:lowercase   attr *lowercase*)
        muted      (:muted       attr *muted*)
        primary    (:primary     attr *primary*)
        success    (:success     attr *success*)
        warning    (:warning     attr *warning*)
        danger     (:danger      attr *danger*)
        background (:background  attr *background*)
        left       (:left        attr *left*)
        right      (:right       attr *right*)
        center     (:center      attr *center*)
        justify    (:justify     attr *justify*)
        top        (:top         attr *top*)
        bottom     (:bottom      attr *bottom*)
        middle     (:middle      attr *middle*)
        baseline   (:baseline    attr *baseline*)
        truncate   (:truncate    attr *truncate*)
        break      (:break       attr *break*)
        nowrap     (:nowrap      attr *nowrap*)
        attr       (dissoc       attr :lead :meta :small :large :bold
                                      :uppercase :capitalize :lowercase
                                      :muted :primary :success :warning :danger
                                      :background :left :right :center :justify
                                      :top :bottom :middle :baseline
                                      :truncate :break :nowrap)]
    (hl/p (core/assoc-class attr {:uk-text-lead       lead
                                  :uk-text-meta       meta
                                  :uk-text-small      small
                                  :uk-text-large      large
                                  :uk-text-bold       bold
                                  :uk-text-uppercase  uppercase
                                  :uk-text-capitalize capitalize
                                  :uk-text-lowercase  lowercase
                                  :uk-text-muted      muted
                                  :uk-text-primary    primary
                                  :uk-text-success    success
                                  :uk-text-warning    warning
                                  :uk-text-danger     danger
                                  :uk-text-background background
                                  :uk-text-left       left
                                  :uk-text-right      right
                                  :uk-text-center     center
                                  :uk-text-justify    justify
                                  :uk-text-top        top
                                  :uk-text-bottom     bottom
                                  :uk-text-middle     middle
                                  :uk-text-baseline   baseline
                                  :uk-text-truncate   truncate
                                  :uk-text-break      break
                                  :uk-text-nowrap     nowrap
                                  }) kids)))
