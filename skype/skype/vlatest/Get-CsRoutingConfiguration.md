---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsRoutingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves the routing configuration object, which contains a list of all voice routes defined within a Microsoft Lync Server 2010 deployment.

**Below Content Applies To:** Lync Server 2013

Retrieves the routing configuration object, which contains a list of all voice routes defined within a Lync Server deployment.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Retrieves the routing configuration object, which contains a list of all voice routes defined within a Skype for Business Server 2015 deployment.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsRoutingConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsRoutingConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Voice routes contain instructions that tell Lync Server 2010 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet is used to retrieve the global instance that holds a list of all voice routes defined within the Lync Server 2010 deployment.
To retrieve individual voice routes or to retrieve them as individual objects rather than as a list, use the Get-CsVoiceRoute cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsRoutingConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsRoutingConfiguration"}

**Below Content Applies To:** Lync Server 2013

Voice routes contain instructions that tell Lync Server how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet is used to retrieve the global instance that holds a list of all voice routes defined within the Lync Server deployment.
To retrieve individual voice routes or to retrieve them as individual objects rather than as a list, use the Get-CsVoiceRoute cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsRoutingConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsRoutingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Voice routes contain instructions that tell Skype for Business Server 2015 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet is used to retrieve the global instance that holds a list of all voice routes defined within the Skype for Business Server 2015 deployment.
To retrieve individual voice routes or to retrieve them as individual objects rather than as a list, use the Get-CsVoiceRoute cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsRoutingConfiguration
```

This example retrieves the routing configuration.
To retrieve individual voice routes, use the Get-CsVoiceRoute cmdlet.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example retrieves the routing configuration.
To retrieve individual voice routes, use the Get-CsVoiceRoute cmdlet.

Get-CsRoutingConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves the routing configuration.
To retrieve individual voice routes, use the Get-CsVoiceRoute cmdlet.

Get-CsRoutingConfiguration

## PARAMETERS

### -Identity
The scope of the routing configuration to retrieve.
The only possible value is Global.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
There can be only one instance of this object, so this parameter does nothing.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the routing configuration from the local replica of the Central Management store, rather than the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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

## OUTPUTS

###  
Get-CsRoutingConfiguration returns instances of the Microsoft.Rtc.Management.Writable.Policy.Voice.PSTNRoutingSettings object.

###  
The Get-CsRoutingConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.Writable.Policy.Voice.PSTNRoutingSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/37a1cbc9-b8b2-423c-8ebb-7947fdcad24e(OCS.14).aspx)

[New-CsRoutingConfiguration]()

[Remove-CsRoutingConfiguration]()

[Set-CsRoutingConfiguration]()

[Get-CsVoiceRoute]()

[Online Version](http://technet.microsoft.com/EN-US/library/37a1cbc9-b8b2-423c-8ebb-7947fdcad24e(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/37a1cbc9-b8b2-423c-8ebb-7947fdcad24e(OCS.16).aspx)

