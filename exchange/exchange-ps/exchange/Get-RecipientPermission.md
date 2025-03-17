---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-recipientpermission
applicable: Exchange Online
title: Get-RecipientPermission
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-RecipientPermission

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-RecipientPermission cmdlet to view information about SendAs permissions that are configured for users in a cloud-based organization.

**Note**: In Exchange Online PowerShell, we recommend that you use the Get-EXORecipientPermission cmdlet instead of this cmdlet. For more information, see [Connect to Exchange Online PowerShell](https://learn.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-RecipientPermission [[-Identity] <RecipientIdParameter>]
 [-AccessRights <MultiValuedProperty>]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>]
 [-Trustee <SecurityPrincipalIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
When a user is given SendAs permission to another user or group, the user can send messages that appear to come from the other user or group.

> [!NOTE]
> This cmdlet doesn't return expected results when the recipient specified by the Trustee parameter has multiple `SecurityPrincipalIdParameter` (Sid) values. When you use the Trustee parameter, the command compares the Sid of the specified Trustee with the recipient's access control list (ACL) record. If some of the recipient's Sid values have changed, there's a mismatch. The workaround is to not to use the user principal name (UPN) value, to use all Sids including the one for history.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-RecipientPermission -Trustee "Kim Akers"
```

This example lists the recipients for whom the user Kim Akers has SendAs permission. Kim can send messages that appear to come directly from the recipients.

### Example 2
```powershell
Get-RecipientPermission "Help Desk"
```

This example lists the users who have SendAs permission on the mailbox Help Desk. The users listed can send messages that appear to come directly from the Help Desk mailbox.

## PARAMETERS

### -Identity
The Identity parameter identifies the recipient that you want to view. The user or group specified by the Trustee parameter has Send As permissions on this recipient. You can specify any type of recipient, for example:

- Mailboxes
- Mail users
- External contacts
- Distribution groups
- Dynamic distribution groups

You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AccessRights
The AccessRights parameter filters the results by permission. The only valid value for this parameter is SendAs.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Trustee
The Trustee parameter filters the results by who has Send As permissions on the specified recipient. You can specify the following types of users or groups (security principals) for this parameter:

- Mailbox users
- Mail users with a Microsoft account
- Security groups

You can use any value that uniquely identifies the user or group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
