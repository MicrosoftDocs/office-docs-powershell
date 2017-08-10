---
external help file: 
applicable: Skype for Business Online
schema: 2.0.0
---

# Set-CsOnlineDialInConferencingBridge

## SYNOPSIS
Use the Set-CsOnlineDialInConferencingBridge cmdlet to modify the settings of a Microsoft audio conferencing bridge.

## SYNTAX

```
Set-CsOnlineDialInConferencingBridge [[-Identity] <Object>] [[-Instance] <Object>] [-Name <Object>]
 [-BypassDualWrite <Object>] [-Confirm] [-DefaultServiceNumber <Object>] [-DomainController <Object>] [-Force]
 [-SetDefault] [-Tenant <Object>] [-TenantDomain <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The Set-CsOnlineDialInConferencingBridge cmdlet can be used to set the default dial-in service phone number for a given audio conferencing bridge.

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

This example sets the default dial-in phone number to 14255551234 for the audio conferencing bridge named "Conference Bridge".

Set-CsOnlineDialInConferencingBridge -Name "Conference Bridge" -DefaultServiceNumber 14255551234

### -------------------------- Example 2 -------------------------- (Skype for Business Online)
```

```

This example changes the name of a conference bridge by creating an conference bridge instance, changing the instance's name, and then setting the conference bridge to the instance.

$bridge = Get-CsOnlineDialInConferencingBridge -Name "Conference Bridge"

$Bridge.Name = "O365 Bridge"

Set-CsOnlineDialInConferencingBridge -Instance $bridge

## PARAMETERS

### -Identity
Specifies the globally-unique identifier (GUID) for the audio conferencing bridge to be modified.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to a Microsoft audio conferencing bridge object to the cmdlet rather than set individual parameter values.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the audio conferencing bridge to be modified.

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

### -BypassDualWrite
PARAMVALUE: $true | $false

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

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultServiceNumber
Specifies the default phone number to be used on the Microsoft audio conferencing bridge.
The default number is used in meeting invitations.

The DefaultServiceNumber must be assigned to the audio conferencing bridge.
Also, when the default service number is changed, the service number of existing users will not be changed.

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

### -DomainController
Specifies the domain controller that's used by the cmdlet to read or write the specified data.
Valid inputs for this parameter include:

Fully qualified domain name (FQDN): -DomainController atl-cs-001.Contoso.com.

Computer name: -DomainController atl-cs-001

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

### -SetDefault
PARAMVALUE: SwitchParameter

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

### -Tenant
This parameter is reserved for internal Microsoft use.

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

### -TenantDomain
This parameter is reserved for internal Microsoft use.

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

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/9e173adc-10bf-49e9-bc5a-329bbb8f2b49(OCS.15).aspx)

