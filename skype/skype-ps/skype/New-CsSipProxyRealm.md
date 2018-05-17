---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsSipProxyRealm
schema: 2.0.0
---

# New-CsSipProxyRealm

## SYNOPSIS

Used to assign the default realm (SIP Communications Service) to a collection of proxy configuration settings.
Realms (also known as protection domains) are used to authenticate user credentials during logon.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsSipProxyRealm -RealmChoice <IRealmChoice> [<CommonParameters>]
```

## DESCRIPTION

Proxy servers provide a way for users outside your internal network to access resources on your internal network.
Each proxy server must be associated with a realm; realms (also known as protection domains) indicate where a user's logon credentials should be processed.
By default, Skype for Business Server uses SIP Communications Service as its default realm; however, it is possible to change the realm used by a proxy server.
The New-CsSipProxyUseDefault cmdlet and the New-CsSipProxyCustom cmdlet provide a way for you to change the realm used by a proxy server.
These changes can also be made by using the New-CsSipProxyRealm cmdlet.
However, because this cmdlet requires an additional step you might want to use the other two cmdlets any time you need to change the realm used by a proxy server.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

$x = New-CsSipProxyUseDefault

$y = New-CsSipProxyRealm -RealmChoice $x
```

The commands shown in Example 1 assign the default realm (SIP Communications Service) to a variable named $y.
To do this, the first command calls the New-CsSipProxyUseDefault cmdlet in order to create a SipProxy.UseDefault object; this object is stored in a variable named $x.

In the second command, $x is used as the parameter value for the New-CsSipProxyRealm cmdlet and the RealmChoice parameter.
In turn, this creates a new proxy realm object that is stored in a variable named $y.

### -------------------------- EXAMPLE 2 -------------------------- 
```

$x = New-CsSipProxyCustom -CustomValue "Litwareinc Communications Service"

$y = New-CsSipProxyRealm -RealmChoice $x
```

The commands shown in Example 2 assign a custom realm (Litwareinc Communications Service) to a variable named $y.
To do this, the first command calls the New-CsSipProxyCustom cmdlet in order to create a SipProxy.Custom object; this object (which uses the CustomValue Litwareinc Communications Service) is stored in a variable named $x.

In the second command, $x is used, along with the New-CsSipProxyRealm cmdlet and the RealmChoice parameter, to create a new custom realm object.


## PARAMETERS

### -RealmChoice
Object representing the realm to be used by a proxy server.
The RealmChoice must be created by using either the New-CsSipProxyUseDefault or the New-CsSipProxyCustom cmdlet.

```yaml
Type: IRealmChoice
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsSipProxyRealm cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsSipProxyRealm cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.Realm object.

## NOTES

## RELATED LINKS

[New-CsSipProxyCustom](New-CsSipProxyCustom.md)

[New-CsSipProxyUseDefault](New-CsSipProxyUseDefault.md)

