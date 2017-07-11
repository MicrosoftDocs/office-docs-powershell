---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsVoiceNormalizationRule

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes a voice normalization rule.
Voice normalization rules are used to convert telephone dialing requirements (for example, dialing 9 to access an outside line) to the E.164 phone number format used by Microsoft Lync Server 2010.

Below Content Applies To: Lync Server 2013

Removes a voice normalization rule.
Voice normalization rules are used to convert telephone dialing requirements (for example, dialing 9 to access an outside line) to the E.164 phone number format used by Lync Server.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Online

Remove-CsVoiceNormalizationRule \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Below Content Applies To: Skype for Business Server 2015

Removes a voice normalization rule.
Voice normalization rules are used to convert telephone dialing requirements (for example, dialing 9 to access an outside line) to the E.164 phone number format used by Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsVoiceNormalizationRule [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [-BypassDualWrite <Object>] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

This cmdlet removes a named voice normalization rule.
These rules are a required part of phone authorization and call routing.
They define the requirements for converting (or translating) numbers from an internal Lync Server 2010 format to a standard (E.164) format.
An understanding of regular expressions is helpful in order to define number patterns that will be translated.

Rules that are removed by using this cmdlet will be deleted from the dial plans of the organization, so they won't be returned by the Get-CsVoiceNormalizationRule cmdlet and will not appear in the NormalizationRules property returned by a call to the Get-CsDialPlan cmdlet.
This means that calling Remove-CsVoiceNormalizationRule could leave a dial plan with no normalization rules.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsVoiceNormalizationRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsVoiceNormalizationRule"}

Below Content Applies To: Lync Server 2013

This cmdlet removes a named voice normalization rule.
These rules are a required part of phone authorization and call routing.
They define the requirements for converting (or translating) numbers from an internal Lync Server format to a standard (E.164) format.
An understanding of regular expressions is helpful in order to define number patterns that will be translated.

Rules that are removed by using this cmdlet will be deleted from the dial plans of the organization, so they won't be returned by the Get-CsVoiceNormalizationRule cmdlet and will not appear in the NormalizationRules property returned by a call to the Get-CsDialPlan cmdlet.
This means that calling Remove-CsVoiceNormalizationRule could leave a dial plan with no normalization rules.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsVoiceNormalizationRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsVoiceNormalizationRule"}

Below Content Applies To: Skype for Business Online

{{Fill in the Description}}

Below Content Applies To: Skype for Business Server 2015

This cmdlet removes a named voice normalization rule.
These rules are a required part of phone authorization and call routing.
They define the requirements for converting (or translating) numbers from an internal Skype for Business Server 2015 format to a standard (E.164) format.
An understanding of regular expressions is helpful in order to define number patterns that will be translated.

Rules that are removed by using this cmdlet will be deleted from the dial plans of the organization, so they won't be returned by the Get-CsVoiceNormalizationRule cmdlet and will not appear in the NormalizationRules property returned by a call to the Get-CsDialPlan cmdlet.
This means that calling the Remove-CsVoiceNormalizationRule cmdlet could leave a dial plan with no normalization rules.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsVoiceNormalizationRule -Identity site:Redmond/SeattleRule1
```

This example removes the voice normalization rule with the Identity site:Redmond/SeattleRule1.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes the voice normalization rule with the Identity site:Redmond/SeattleRule1.

Remove-CsVoiceNormalizationRule -Identity site:Redmond/SeattleRule1

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes the voice normalization rule with the Identity site:Redmond/SeattleRule1.

Remove-CsVoiceNormalizationRule -Identity site:Redmond/SeattleRule1

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Remove-CsVoiceNormalizationRule -Identity site:Redmond
```

This example removes all voice normalization rules from site Redmond.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example removes all voice normalization rules from site Redmond.

Remove-CsVoiceNormalizationRule -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example removes all voice normalization rules from site Redmond.

Remove-CsVoiceNormalizationRule -Identity site:Redmond

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

The unique identity of the rule to be removed.
If the Identity specified includes the scope followed by a slash and then the name (for example: site:Redmond/Rule1, where site:Redmond is the scope and Rule1 is the name), the one rule with that unique Identity will be removed.
If the value passed to the Identity contains only the scope (site:Redmond), all normalization rules at that scope will be removed.



Below Content Applies To: Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Suppresses any confirmation prompts that would otherwise be displayed before making changes.



Below Content Applies To: Skype for Business Online

{{Fill Force Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



Below Content Applies To: Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



Below Content Applies To: Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.NormalizationRule object.
Accepts pipelined input of voice normalization rule objects.

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

###  
This cmdlet deletes an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.NormalizationRule.

### System.Object

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6a1bf26c-d95b-4a03-8d2d-c17159dcb9be(OCS.14).aspx)

[New-CsVoiceNormalizationRule]()

[Set-CsVoiceNormalizationRule]()

[Get-CsVoiceNormalizationRule]()

[Test-CsVoiceNormalizationRule]()

[Remove-CsDialPlan]()

[Get-CsDialPlan]()

[Online Version](http://technet.microsoft.com/EN-US/library/6a1bf26c-d95b-4a03-8d2d-c17159dcb9be(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6a1bf26c-d95b-4a03-8d2d-c17159dcb9be(OCS.16).aspx)

