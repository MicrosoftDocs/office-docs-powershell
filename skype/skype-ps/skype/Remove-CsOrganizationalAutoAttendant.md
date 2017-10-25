---
external help file: 
applicable: Skype for Business Online
title: Remove-CsOrganizationalAutoAttendant
schema: 2.0.0
---

# Remove-CsOrganizationalAutoAttendant

## SYNOPSIS
Use the Remove-CsOrganizationalAutoAttendant cmdlet to delete an Organizational Auto Attendant (OAA).

## SYNTAX

```
Remove-CsOrganizationalAutoAttendant [[-PrimaryUri] <Object>] [-ApplicationId <Object>]
 [-BypassDualWrite <Object>] [-Confirm] [-DomainController <Object>] [-Force] [-Tenant <Object>] [-WhatIf]
 [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The Remove-CsOrganizationalAutoAttendant cmdlet deletes an OAA that is specified by using the PrimaryUri parameter.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsOrganizationalAutoAttendant -PrimaryUri "sip:mainoaa@contoso.com"
```

This example deletes the OAA that has a Primary URI of sip:mainoaa@contoso.com.


## PARAMETERS

### -PrimaryUri
PARAMVALUE: Uri

The PrimaryUri parameter represents the SIP address for the OAA to be removed.


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

### -ApplicationId
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

### String
The Remove-CsOrganizationalAutoAttendant cmdlet accepts a string as the PrimaryUri parameter.


## OUTPUTS

### None


## NOTES

## RELATED LINKS
