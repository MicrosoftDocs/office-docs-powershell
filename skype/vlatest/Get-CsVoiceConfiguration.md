---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsVoiceConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves the voice configuration object, which contains a full list of all voice test configurations defined for the Microsoft Lync Server 2010 deployment.

**Below Content Applies To:** Lync Server 2013

Retrieves the voice configuration object, which contains a full list of all voice test configurations defined for the Lync Server deployment.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Retrieves the voice configuration object, which contains a full list of all voice test configurations defined for the Skype for Business Server 2015 deployment.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsVoiceConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsVoiceConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Voice test configurations are used to test a phone number against a specific voice policy, route, and dial plan.
This cmdlet is used to retrieve the global instance that holds a list of all voice test configurations defined within the Lync Server 2010 deployment.
To retrieve individual voice test configurations or to retrieve them as individual objects rather than as a list, use the Get-CsVoiceTestConfiguration cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsVoiceConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsVoiceConfiguration"}

**Below Content Applies To:** Lync Server 2013

Voice test configurations are used to test a phone number against a specific voice policy, route, and dial plan.
This cmdlet is used to retrieve the global instance that holds a list of all voice test configurations defined within the Lync Server deployment.
To retrieve individual voice test configurations or to retrieve them as individual objects rather than as a list, use the Get-CsVoiceTestConfiguration cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsVoiceConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsVoiceConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Voice test configurations are used to test a phone number against a specific voice policy, route, and dial plan.
This cmdlet is used to retrieve the global instance that holds a list of all voice test configurations defined within the Skype for Business Server 2015 deployment.
To retrieve individual voice test configurations or to retrieve them as individual objects rather than as a list, use the Get-CsVoiceTestConfiguration cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsVoiceConfiguration
```

This example retrieves the voice configuration.
To retrieve the voice test configurations, use the Get-CsVoiceTestConfiguration cmdlet.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example retrieves the voice configuration.
To retrieve the voice test configurations, use the Get-CsVoiceTestConfiguration cmdlet.

Get-CsVoiceConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves the voice configuration.
To retrieve the voice test configurations, use the Get-CsVoiceTestConfiguration cmdlet.

Get-CsVoiceConfiguration

## PARAMETERS

### -Identity
The scope of the voice configuration to retrieve.
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
There can only be one instance of this object, so this parameter does nothing.

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
Retrieves the voice configuration from the local replica of the Central Management store, rather than the Central Management store itself.

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
This cmdlet returns an instance of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/c5e7afa3-28d3-4bf9-a2f2-c34932c9a3cd(OCS.14).aspx)

[Remove-CsVoiceConfiguration]()

[Set-CsVoiceConfiguration]()

[Get-CsVoiceTestConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/c5e7afa3-28d3-4bf9-a2f2-c34932c9a3cd(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c5e7afa3-28d3-4bf9-a2f2-c34932c9a3cd(OCS.16).aspx)

