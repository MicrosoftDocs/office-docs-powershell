---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/get-vivamodulefeatureenablement
applicable: Exchange Online
title: Get-VivaModuleFeatureEnablement
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-VivaModuleFeatureEnablement

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module v3.2.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-VivaModuleFeatureEnablement cmdlet to view whether or not a feature in a Viva module is enabled for a specific user or group. Whether or not the feature is enabled is referred to as the feature's "enablement state". The enablement state returned by this cmdlet is based on the access policies set by the admin.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-VivaModuleFeatureEnablement -FeatureId <String> -Identity <String> -ModuleId <String>
 [-Detailed]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Get-VivaModuleFeatureEnablement cmdlet to view whether or not a feature in a Viva module is enabled for a specific user or group.

You need to use the Connect-ExchangeOnline cmdlet to authenticate.

This cmdlet requires the .NET Framework 4.7.2 or later.

Currently, you need to be a member of the Global Administrators role to run this cmdlet.

To learn more about administrator role permissions in Microsoft Entra ID, see [Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids).

> [!IMPORTANT]
> Microsoft recommends that you use roles with the fewest permissions. Using lower permissioned accounts helps improve security for your organization. Global Administrator is a highly privileged role that should be limited to emergency scenarios when you can't use an existing role.

## EXAMPLES

### Example 1
```powershell
Get-VivaModuleFeatureEnablement -ModuleId VivaInsights -FeatureId Reflection -Identity user@contoso.com
```

This example returns the enablement state of the Reflection feature in Viva Insights for the **user@contoso.com** user.

### Example 2
```powershell
Get-VivaModuleFeatureEnablement -ModuleId VivaInsights -FeatureId Reflection -Identity group@contoso.com
```

This example returns the enablement state of the Reflection feature in Viva Insights for the **group@contoso.com** group.

### Example 3
```powershell
Get-VivaModuleFeatureEnablement -ModuleId VivaInsights -FeatureId Reflection -Identity user@contoso.com -Detailed
```

This example returns the enablement state of the Reflection feature in Viva Insights for the **user@contoso.com** user. Response is enhanced to provide additional information about the policies that are driving the feature's enablement state
## PARAMETERS

### -FeatureId
The FeatureId parameter specifies the feature in the Viva module.

To view details about the features in a Viva module that support feature access controls, refer to the Get-VivaModuleFeature cmdlet. The details provided by the Get-VivaModuleFeature cmdlet include the feature identifier.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Type: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the user principal name (UPN) of the user or the SMTP address (email address) of the group that you want to view the feature enablement status of.

[Mail-enabled Microsoft Entra groups](https://docs.microsoft.com/graph/api/resources/groups-overview#group-types-in-azure-ad-and-microsoft-graph) are supported.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Type: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModuleId
The ModuleId parameter specifies the Viva module.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Type: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Detailed
This parameter is available in version 3.8.1-Preview1 or later of the module.

The Detailed switch enhances the output of the command by providing more comprehensive information. You don't need to specify a value with this switch.

This switch returns detailed insights, including related policies and their effectiveness.

```yaml
Type: Switch Parameter
Parameter Sets: (All)
Aliases:
Type: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Type: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Exchange PowerShell](https://learn.microsoft.com/powershell/module/exchange)

[About the Exchange Online PowerShell module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2)

[Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids)
