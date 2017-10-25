---
external help file: 
applicable: Skype for Business Online
title: Set-CsOrganizationalAutoAttendant
schema: 2.0.0
---

# Set-CsOrganizationalAutoAttendant

## SYNOPSIS
Use the Set-CsOrganizationalAutoAttendant cmdlet to modify the properties of an existing Organizational Auto Attendant (OAA).

## SYNTAX

```
Set-CsOrganizationalAutoAttendant [[-Instance] <Object>] [-BypassDualWrite <Object>] [-Confirm]
 [-DomainController <Object>] [-Force] [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The Set-CsOrganizationalAutoAttendant cmdlet lets you modify the properties of an OAA. For example, you can change the phone number, the operator, the greeting, or the menu prompts.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$oaa = Get-CsOrganizationalAutoAttendant -PrimaryUri "sip:mainoaa@contoso.com"
$oaa.LineUris = [System.Uri] "tel:+##########"
Set-CsOrganizationalAutoAttendant -Instance $oaa
```

This example changes the telephone number for the OAA that has a Primary URI of sip:mainoaa@contoso.com.


## PARAMETERS

### -Instance
PARAMVALUE: OrgAutoAttendant

The Instance parameter is the object reference to the OAA to be modified. 

You can retrieve an object reference to an existing OAA by using the Get-CsOrganizationalAutoAttendant cmdlet and assigning the returned value to a variable.


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
PARAMVALUE: SwitchParameter

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

### -DomainController
PARAMVALUE: Fqdn

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
PARAMVALUE: Guid

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
PARAMVALUE: SwitchParameter

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

### Microsoft.Rtc.Management.Hosted.OAA.Models.OrgAutoAttendant
The Set-CsOrganizationalAutoAttendant cmdlet accepts a Microsoft.Rtc.Management.Hosted.OAA.Models.OrgAutoAttendant object as the Instance parameter.


## OUTPUTS

### None
The Set-CsOrganizationalAutoAttendant cmdlet does not return any objects or values. Instead, the cmdlet modifies the instance of the Microsoft.Rtc.Management.Hosted.OAA.Models.OrgAutoAttendant object that is passed in as the Instance parameter.


## NOTES

## RELATED LINKS

[Get-CsOrganizationalAutoAttendant](Get-CsOrganizationalAutoAttendant.md)
