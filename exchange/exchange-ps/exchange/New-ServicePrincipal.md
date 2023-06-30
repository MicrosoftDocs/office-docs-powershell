---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-serviceprincipal
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
title: New-ServicePrincipal
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-ServicePrincipal

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-ServicePrincipal cmdlet to create service principals in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-ServicePrincipal -AppId <String> -ServiceId <String>
 [-Confirm]
 [-DisplayName <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Service principals exist in Azure Active Directory to define what apps can do, who can access the apps, and what resources the apps can access. In Exchange Online, service principals are references to the service principals in Azure AD. To assign Exchange Online role-based access control (RBAC) roles to service principals in Azure AD, you use the service principal references in Exchange Online. The **\*-ServicePrincipal** cmdlets in Exchange Online PowerShell let you view, create, and remove these service principal references.

For more information, see [Application and service principal objects in Azure Active Directory](https://learn.microsoft.com/azure/active-directory/develop/app-objects-and-service-principals).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-ServicePrincipal -AppId 71487acd-ec93-476d-bd0e-6c8b31831053 -ServiceId 6233fba6-0198-4277-892f-9275bf728bcc
```

This example create a new service principal in Exchange Online with the specified AppId and ServiceId values.

## PARAMETERS

### -AppId
The AppId parameter specifies the unique AppId GUID value for the service principal. For example, ca73fffa-cedb-4b84-860f-d7fb8aa8a6c1.

A valid value for this parameter is available in the following locations:

- The AppId property in the output of the [Get-MgServicePrincipal](https://learn.microsoft.com/powershell/module/microsoft.graph.applications/get-mgserviceprincipal) cmdlet in Microsoft Graph PowerShell.
- The Application ID property from Enterprise applications in the Azure AD portal: <https://portal.azure.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AppAppsPreview/menuId~/null>.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceId
The ServiceId parameter specifies the unique ServiceId GUID value for the service principal. For example, 7c7599b2-23af-45e3-99ff-0025d148e929.

- The ObjectId property in the output of the [Get-MgServicePrincipal](https://learn.microsoft.com/powershell/module/microsoft.graph.applications/get-mgserviceprincipal) cmdlet in Microsoft Graph PowerShell.
- The Object ID property from Enterprise applications in the Azure AD portal: <https://portal.azure.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AppAppsPreview/menuId~/null>.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the friendly name of the service principal. If the name contains spaces, enclose the name in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

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
