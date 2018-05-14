---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsSipProxyUseDefault
schema: 2.0.0
---

# New-CsSipProxyUseDefault

## SYNOPSIS
Used to assign the default realm (SIP Communications Service) to a collection of proxy configuration settings.
Realms (also known as protection domains) are used to authenticate user credentials during logon.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
New-CsSipProxyUseDefault [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
Proxy servers provide a way for users outside your internal network to access resources on your internal network.
Each proxy server must be associated with a realm; realms (also known as protection domains) indicate where a user's logon credentials should be processed.
By default, Skype for Business Server uses SIP Communications Service as its default realm; however, it is possible to change the realm employed by a proxy server.
If you change the realm and then want to revert back to using the default realm, you can do so by creating a SipProxy.UseDefault object and then assigning that object to the Realm property of the appropriate proxy server (or servers).


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
$x = New-CsSipProxyUseDefault
```

The command shown in Example 1 assigns the default realm (SIP Communications Service) to a variable named $x.


## PARAMETERS

### -Verbose
Reports detailed activity to the screen as the cmdlet runs.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: vb
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The `New-CsSipProxyUseDefault` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `New-CsSipProxyUseDefault` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.UseDefault object.

## NOTES

## RELATED LINKS

[New-CsSipProxyCustom](New-CsSipProxyCustom.md)

[New-CsSipProxyRealm](New-CsSipProxyRealm.md)
