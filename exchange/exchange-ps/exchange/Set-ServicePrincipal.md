---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-serviceprincipal
applicable: Exchange Online
title: Set-ServicePrincipal
schema: 2.0.0
author: bin
ms.author: bili1
ms.reviewer:
---

# Set-ServicePrincipal

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-ServicePrincipal cmdlet to change service principals in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ServicePrincipal
 [-Identity] <ServicePrincipalIdParameter>
 [-DisplayName <String>]
 [-Organization <OrganizationIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

Please note that only DisplayName can be changed, if AppId/ServiceId is wrong, please delete and create a new ServicePricnipal.

## EXAMPLES

### Example 1
```powershell
Set-ServicePrincipal -Identity dc873ad4-0397-4d74-b5c0-897cd3a94731 -DisplayName "Another App Name"
```

This example sets the service principal in Exchange Online with the specified display name.

## PARAMETERS

### -Identity
The Identity parameter specifies the unique identity value for the service principal.

Both AppId, ServiceId, or DislayName can be used as identity of the service principal. 

```yaml
Type: ServicePrincipalIdParameter
Parameter Sets: (All)
Aliases:

Required: True
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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:

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
