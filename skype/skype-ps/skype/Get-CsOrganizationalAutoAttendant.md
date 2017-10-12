---
external help file: 
applicable: Skype for Business Online
title: Get-CsOrganizationalAutoAttendant
schema: 2.0.0
---

# Get-CsOrganizationalAutoAttendant

## SYNOPSIS
Use the Get-CsOrganizationalAutoAttendant cmdlet to get information about Organizational Auto Attendants (OAAs). 

## SYNTAX

```
Get-CsOrganizationalAutoAttendant [[-PrimaryUri] <Object>] [-ApplicationId <Object>]
 [-BypassDualWrite <Object>] [-DomainController <Object>] [-Force] [-Tenant <Object>] [-AsJob]
 [-First <Object>] [-IncludeStatus] [-Skip <Object>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOrganizationalAutoAttendant cmdlet returns information about the OAAs in your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOrganizationalAutoAttendant
```

This example gets all OAAs in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsOrganizationalAutoAttendant -PrimaryUri sip:mainoaa@contoso.com
```

This example gets the OAAs that has the Primary URI of sip:mainoaa@contoso.com.

### -------------------------- Example 3 --------------------------
```
Get-CsOrganizationalAutoAttendant -First 10
```

This example gets the first ten organizational auto attendants configured for use in the organization.

### -------------------------- Example 4 --------------------------
```
Get-CsOrganizationalAutoAttendant -Skip 5 -First 10
```

This example skips initial 5 organizational auto attendants and gets the next 10 OAAs configured for use in the organization.


## PARAMETERS

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

### -PrimaryUri
The PrimaryUri parameter represents the SIP address for the OAA to be retrieved. If this parameter is not specified, then all created OAAs in the organization are returned.

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

### -First
The First parameter indicates the maximum number of organizational auto attendants to retrieve as the result. It is intended to be used for pagination purposes.

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

### -IncludeStatus
{{Fill IncludeStatus Description}}

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

### -Skip
The Skip parameter indicates the number of initial organizational auto attendants to skip in the result. It is intended to be used for pagination purposes.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### String
The String is used as the PrimaryUri input.


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.OrgAutoAttendant 


## NOTES


## RELATED LINKS
