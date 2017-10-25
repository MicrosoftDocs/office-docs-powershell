---
external help file: 
applicable: Skype for Business Online
title: Update-CsOrganizationalAutoAttendant
schema: 2.0.0
---

# Update-CsOrganizationalAutoAttendant

## SYNOPSIS
Use Update-CsOrganizationalAutoAttendant cmdlet to force an update of resources associated with an Organizational Auto Attendant (OAA) provisioning.

## SYNTAX

```
Update-CsOrganizationalAutoAttendant [[-PrimaryUri] <Object>] [-ApplicationId <Object>]
 [-BypassDualWrite <Object>] [-DomainController <Object>] [-Force] [-Tenant <Object>] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet provides a way to update the resources associated with an organizational auto attendant configured for use in your organization.

Note: This cmdlet only triggers the refresh of organizational auto attendant resources. It does not wait until all the resources have been refreshed. The last completed status of organizational auto attendant can be retrieved using Get-CsOrganizationalAutoAttendantStatus cmdlet.  


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Update-CsOrganizationalAutoAttendant -PrimaryUri "sip:mainoaa@contoso.com"
```

In Example 1, the Update-CsOrganizationalAutoAttendant cmdlet is used to update all resources of an organizational auto attendant with Primary URI of sip:mainoaa@contoso.com.

## PARAMETERS

### -ApplicationId
{{Fill ApplicationId Description}}

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

### -DomainController
{{Fill DomainController Description}}

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
{{Fill Force Description}}

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
The Primary URI represents the SIP address of the organizational auto attendant whose resources are to be updated.


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 0
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

### String
The Update-CsOrganizationalAutoAttendant cmdlet accepts a string as the PrimaryUri parameter.


## OUTPUTS

### None


## NOTES

## RELATED LINKS

[Get-CsOrganizationalAutoAttendantStatus](Get-CsOrganizationalAutoAttendantStatus.md)
