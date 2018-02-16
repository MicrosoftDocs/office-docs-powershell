---
applicable: Exchange Online
schema: 2.0.0
---

# Get-RecipientPermission

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-RecipientPermission cmdlet to view information about SendAs permissions that are configured for users in a cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-RecipientPermission [[-Identity] <RecipientIdParameter>] [-AccessRights <MultiValuedProperty>]
 [-ReadFromDomainController] [-ResultSize <Unlimited>] [-Trustee <SecurityPrincipalIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
When a user is given SendAs permission to another user or group, the user can send messages that appear to come from the other user or group.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Online)
```
Get-RecipientPermission -Trustee "Kim Akers"
```

This example lists the recipients for whom the user Kim Akers has SendAs permission. Kim can send messages that appear to come directly from the recipients.

### Example 2 -------------------------- (Exchange Online)
```
Get-RecipientPermission "Help Desk"
```

This example lists the users who have SendAs permission on the mailbox Help Desk. The users listed can send messages that appear to come directly from the Help Desk mailbox.

## PARAMETERS

### -AccessRights
The AccessRights parameter filters the results by permission.

Valid input for this parameter is SendAs.

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

### -Identity
The Identity parameter filters the results by the target recipient. The user or group specified by the Trustee parameter can operate on this recipient.

You can specify any type of recipient, for example:

- Mailboxes

- Mail users

- External contacts

- Distribution groups

- Dynamic distribution groups

You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

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

### -ReadFromDomainController
The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain.

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
The Trustee parameter filters the results by the user or group to whom you're granting the permission. The user or group can operate on the recipient specified by the Identity parameter.

You can specify the following types of users or groups:

- Mailbox users

- Mail users with a Microsoft account (formerly known as a Windows Live ID)

- Security groups

You can use any value that uniquely identifies the user or group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/a80d1ec7-2504-44f1-b6b4-2e65310b4c6e.aspx)

