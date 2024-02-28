---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/test-serviceprincipalauthorization
applicable: Exchange Online, Exchange Online Protection
title: Test-ServicePrincipalAuthorization
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Test-ServicePrincipalAuthorization

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Test-ServicePrincipalAuthorization cmdlet to test the access granted by role-based access control (RBAC) for Applications. For more information, see [Role Based Access Control for Applications in Exchange Online](https://learn.microsoft.com/Exchange/permissions-exo/application-rbac).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Test-ServicePrincipalAuthorization [-Identity] <ServicePrincipalIdParameter>
 [-Confirm]
 [-Resource <UserIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
PS C:\> Test-ServicePrincipalAuthorization -Identity "DemoB" -Resource "Mailbox A" | Format-Table

RoleName                      GrantedPermissions          AllowedResourceScope        ScopeType                 InScope
--------                      ------------------          --------------------        ---------                 ------
Application Mail.Read         Mail.Read                   Canadian Employees           CustomRecipientScope     True
Application Calendars.Read    Calendars.Read              4d819ce9-9257-44..           AdministrativeUnit       False
Application Contacts.Read     Contacts.Read               Organization                 Organization             True
```

This example tests if this service principal (the app named "DemoB") can exercise each of its assigned permissions against the target mailbox named "Mailbox A." The membership in the scope is indicated by the InScope column.

### Example 2
```powershell
PS C:\> Test-ServicePrincipalAuthorization -Identity "DemoB" | Format-Table

RoleName                      GrantedPermissions          AllowedResourceScope        ScopeType                 InScope
--------                      ------------------          --------------------        ---------                 ------
Application Mail.Read         Mail.Read                   Canadian Employees           CustomRecipientScope     Not Run
Application Calendars.Read    Calendars.Read              4d819ce9-9257-44..           AdministrativeUnit       Not Run
Application Contacts.Read     Contacts.Read               Organization                 Organization             Not Run
```

This example tests the entitlement of the app named "DemoB", including which permissions it has at which scopes. Because the command doesn't use the Resource parameter, the scope membership check is not run.

## PARAMETERS

### -Identity
The Identity parameter specifies the service principal that you want to test. You can use any value that uniquely identifies the service principal. For example:

- Name
- Distinguished name (DN)
- GUID
- AppId
- ServiceId

```yaml
Type: ServicePrincipalIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Resource
The Resource parameter specifies the target mailbox where the scoped permissions apply. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Distinguished name (DN)
- Canonical DN
- GUID

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -WhatIf
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online, Exchange Online Protection

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
