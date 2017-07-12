---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsEnhancedEmergencyServiceDisclaimer

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves the disclaimer text that is used globally to prompt for location information for an Enhanced 9-1-1 (E9-1-1) implementation.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves the disclaimer text that is used globally to prompt for location information for an Enhanced 9-1-1 (E9-1-1) implementation.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsEnhancedEmergencyServiceDisclaimer [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsEnhancedEmergencyServiceDisclaimer [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

In order for an Enterprise Voice implementation to provide E9-1-1 service, locations must be mapped to ports, subnets, switches, and wireless access points to identify the caller's location.
When the caller is connecting from outside one of these mapped points, he must enter his location manually in order for it to be received by emergency services.
This cmdlet retrieves a text string that will be displayed to users who decide not to enter their location information.
This message will be displayed only if the LocationRequired property of the user's location policy is set to Disclaimer.
(You can retrieve location policy settings by calling Get-CsLocationPolicy.)

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsEnhancedEmergencyServiceDisclaimer cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsEnhancedEmergencyServiceDisclaimer"}

**Below Content Applies To:** Skype for Business Server 2015

In order for an Enterprise Voice implementation to provide E9-1-1 service, locations must be mapped to ports, subnets, switches, and wireless access points to identify the caller's location.
When the caller is connecting from outside one of these mapped points, he must enter his location manually in order for it to be received by emergency services.
This cmdlet retrieves a text string that will be displayed to users who decide not to enter their location information.
This message will be displayed only if the LocationRequired property of the user's location policy is set to Disclaimer.
(You can retrieve location policy settings by calling the Get-CsLocationPolicy cmdlet.)



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsEnhancedEmergencyServiceDisclaimer
```

This command retrieves the text of the enhanced emergency service disclaimer.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This command retrieves the text of the enhanced emergency service disclaimer.

Get-CsEnhancedEmergencyServiceDisclaimer

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This command retrieves the text of the enhanced emergency service disclaimer.

Get-CsEnhancedEmergencyServiceDisclaimer

## PARAMETERS

### -Identity
This will always be Global.

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
This parameter allows for wildcard searches of the Identity.
However, since the only valid value for Identity is Global, this parameter is not useful for this cmdlet.

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
Retrieves the disclaimer information from the local replica of the Central Management store, rather than the Central Management store itself.

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
Returns an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Location.EnhancedEmergencyServiceDisclaimer.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b5e3a01e-4056-47a0-9c3c-efdf55a08f69(OCS.14).aspx)

[Remove-CsEnhancedEmergencyServiceDisclaimer]()

[Set-CsEnhancedEmergencyServiceDisclaimer]()

[Get-CsLocationPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/b5e3a01e-4056-47a0-9c3c-efdf55a08f69(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b5e3a01e-4056-47a0-9c3c-efdf55a08f69(OCS.16).aspx)

