---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-serviceprincipal
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
title: Get-ServicePrincipal
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-ServicePrincipal

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ServicePrincipal cmdlet to view information about service principals in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ServicePrincipal [[-Identity] <ServicePrincipalIdParameter>]
 [-Organization <OrganizationIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
Service principals exist in Microsoft Entra ID to define what apps can do, who can access the apps, and what resources the apps can access. In Exchange Online, service principals are references to the service principals in Microsoft Entra ID. To assign Exchange Online role-based access control (RBAC) roles to service principals in Microsoft Entra ID, you use the service principal references in Exchange Online. The **\*-ServicePrincipal** cmdlets in Exchange Online PowerShell let you view, create, and remove these service principal references.

For more information, see [Application and service principal objects in Microsoft Entra ID](https://learn.microsoft.com/entra/identity-platform/app-objects-and-service-principals).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ServicePrincipal
```

This example returns a summary list of all service principals within an organization.

### Example 2
```powershell
Get-ServicePrincipal -Identity ca73fffa-cedb-4b84-860f-d7fb8aa8a6c1 | Format-List
```

This example returns detailed information about the service principal with the ObjectId value ca73fffa-cedb-4b84-860f-d7fb8aa8a6c1.

## PARAMETERS

### -Identity
The Identity parameter specifies the service principal that you want to view. You can use any value that uniquely identifies the service principal. For example:

- Name
- Distinguished name (DN)
- GUID
- AppId
- ObjectId

```yaml
Type: ServicePrincipalIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Organization
This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
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
