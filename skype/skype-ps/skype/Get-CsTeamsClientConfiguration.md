---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
Module Name: Skype for Business Online
title: Get-CsTeamsClientConfiguration
schema: 2.0.0
---

# Get-CsTeamsClientConfiguration

## SYNOPSIS
The TeamsClientConfiguration allows IT admins to control the settings that can be accessed via Teams clients across their organization.  This configuration includes settings like which third party cloud storage your organization allows, whether or not guest users can access the teams client, and how Surface Hub devices can interact with Skype for Business meetings.  This cmdlet allows IT admins to retrieve the effective configuration for their organization.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsClientConfiguration [-Tenant <System.Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsClientConfiguration [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The TeamsClientConfiguration allows IT admins to control the settings that can be accessed via Teams clients across their organization.  This configuration includes settings like which third party cloud storage your organization allows, whether or not guest users can access the teams client, and how Surface Hub devices can interact with Skype for Business meetings.  This cmdlet allows IT admins to retrieve the effective configuration for their organization.

Use in conjunction with Set-CsTeamsClientConfiguration to update the settings in your organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsClientConfiguration
```

Retrieves the effective client configuration in the tenant.

## PARAMETERS

### -Filter
Microsoft internal use only.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The only valid input is Global, as you can have only one effective configuration in your organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Internal Microsoft use only.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use only.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
