---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-MailboxFolder
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-MailboxFolder

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxFolder cmdlet to view folders in your own mailbox. Administrators can't use this cmdlet to view folders in other mailboxes (the cmdlet is available only from the MyBaseOptions user role).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set3
```
Get-MailboxFolder [[-Identity] <MailboxFolderIdParameter>] [-GetChildren] [-DomainController <Fqdn>]
 [-MailFolderOnly] [-ResultSize <Unlimited>] [-Recurse] [<CommonParameters>]
```

### Set2
```
Get-MailboxFolder [[-Identity] <MailboxFolderIdParameter>] [-Recurse] [-DomainController <Fqdn>]
 [-MailFolderOnly] [-ResultSize <Unlimited>] [-GetChildren] [<CommonParameters>]
```

## DESCRIPTION
This command checks that the mailbox specified in the Identity parameter is a valid Exchange mailbox before retrieving the requested folders. The cmdlet returns all folders if the MailFolderOnly switch isn't specified.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxFolder -Identity Tony:\Inbox
```

This example retrieves the Inbox folder in Tony's mailbox. The Identity parameter is supplied in the format of \<Mailbox Identity\>:\<Folder\>.

### -------------------------- Example 2 --------------------------
```
Get-MailboxFolder -Identity Tony
```

This example returns the root folders in Tony's mailbox. The Identity parameter is supplied in the format of \<Mailbox Identity\>.

### -------------------------- Example 3 --------------------------
```
Get-MailboxFolder -Identity Tony -GetChildren -MailFolderOnly
```

This example returns the first level of mail folders in Tony's mailbox.

### -------------------------- Example 4 --------------------------
```
Get-MailboxFolder -Identity Tony:\Inbox -GetChildren
```

This example returns information about all the subfolders under Inbox in Tony's mailbox.

### -------------------------- Example 5 --------------------------
```
Get-MailboxFolder -Identity Tony:\Inbox -Recurse
```

This example returns all levels of folders under Inbox in Tony's mailbox.

## PARAMETERS

### -GetChildren
The GetChildren switch specifies whether to return only the first level of subfolders under the specified parent folder. You don't need to specify a value with this switch.

You can't use this switch with the Recurse switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recurse
The Recurse switch specifies whether to return the specified parent folder and all of its subfolders. You don't need to specify a value with this switch.

You can't use this switch with the GetChildren switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox and the folder that you want to view. If you don't specify the folder, the command returns information about folders in the root hierarchy of the specified mailbox. You specify values for this parameter by using the syntax: \<Mailbox Identity\>:\<Parent\>.

Valid values for \<Mailbox Identity\> are unique identifiers for the mailbox.

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

Values for \<Parent\> can be both the store object ID and a path string such as \\Inbox\\Personal.

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MailFolderOnly
The MailFolderOnly switch specifies whether to return only the mail folders in the specified mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/d519b3de-2118-4007-a556-51c01d1ba931.aspx)
