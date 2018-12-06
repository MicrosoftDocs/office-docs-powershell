---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: New-CsOnlineApplicationInstanceAssociation
schema: 2.0.0
---

# New-CsOnlineApplicationInstanceAssociation

## SYNOPSIS
Use the New-CsOnlineApplicationInstanceAssociation cmdlet to associate either a single or multiple application instances with an application configuration, like auto attendant or call queue.

## SYNTAX

```
New-CsOnlineApplicationInstanceAssociation -Identities <String[]> -ConfigurationId <String> -ConfigurationType <Object> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOnlineApplicationInstanceAssociation cmdlet associates either a single or multiple application instances with an application configuration, like auto attendant or call queue. When an association is created between an application instance and an application configuration, calls reaching that application instance would be handled based on the associated application configuration.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
New-CsOnlineApplicationInstanceAssociation -Identities @("76afc66a-5fe9-4a3d-ab7a-37c0e37b1f19") -ConfigurationId "c2ee3e18-b738-5515-a97b-46be52dfc057" -ConfigurationType AutoAttendant
```

This example creates an association between application instance, with identity "76afc66a-5fe9-4a3d-ab7a-37c0e37b1f19", and the application configuration, with identity "c2ee3e18-b738-5515-a97b-46be52dfc057" and type `AutoAttendant`.

### -------------------------- Example 2 --------------------------
```powershell
New-CsOnlineApplicationInstanceAssociation -Identities @("76afc66a-5fe9-4a3d-ab7a-37c0e37b1f19", "85493bbf-72f9-508f-b006-bc6ef33f0012") -ConfigurationId "c2ee3e18-b738-5515-a97b-46be52dfc057" -ConfigurationType AutoAttendant
```

This example creates an association between application instances, with identities "76afc66a-5fe9-4a3d-ab7a-37c0e37b1f19" and "85493bbf-72f9-508f-b006-bc6ef33f0012", and the application configuration, with identity "c2ee3e18-b738-5515-a97b-46be52dfc057" and type `AutoAttendant`.

## PARAMETERS

### -Identities
The Identities parameter is the identities of application instances to be associated with the provided configuration ID.

```yaml
Type: System.String[]
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfigurationId
The ConfigurationId parameter is the identity of the configuration that would be associatied with the provided application instances.

```yaml
Type: System.string
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfigurationType
The ConfigurationType parameter denotes the type of the configuration that would be associated with the provided application instances.

It can be one of two values:

- AutoAttendant
- CallQueue

```yaml
Type: System.string
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
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

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.AssociationOperationOutput

## NOTES

## RELATED LINKS

[Get-CsOnlineApplicationInstanceAssociation](Get-CsOnlineApplicationInstanceAssociation.md)

[Get-CsOnlineApplicationInstanceAssociationStatus](Get-CsOnlineApplicationInstanceAssociationStatus.md)

[Remove-CsOnlineApplicationInstanceAssociation](Remove-CsOnlineApplicationInstanceAssociation.md)

