---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-publicfolder
schema: 2.0.0
title: Get-PublicFolder
---

# Get-PublicFolder

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-PublicFolder cmdlet to retrieve the attributes of a public folder or a set of public folders.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### GetChildren
```
Get-PublicFolder [[-Identity] <PublicFolderIdParameter>]
 [-GetChildren]
 [-DomainController <Fqdn>]
 [-Mailbox <MailboxIdParameter>]
 [-Organization <OrganizationIdParameter>]
 [-ResidentFolders]
 [-ResultSize <Unlimited>]
 [-Server <ServerIdParameter>]
 [<CommonParameters>]
```

### Recurse
```
Get-PublicFolder [[-Identity] <PublicFolderIdParameter>]
 [-Recurse]
 [-DomainController <Fqdn>]
 [-Mailbox <MailboxIdParameter>]
 [-Organization <OrganizationIdParameter>]
 [-ResidentFolders]
 [-ResultSize <Unlimited>]
 [-Server <ServerIdParameter>]
 [<CommonParameters>]
```

### LostAndFound
```
Get-PublicFolder [-LostAndFound]
 [-DomainController <Fqdn>]
 [-Mailbox <MailboxIdParameter>]
 [-Organization <OrganizationIdParameter>]
 [-ResidentFolders]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### Identity
```
Get-PublicFolder [[-Identity] <PublicFolderIdParameter>]
 [-DomainController <Fqdn>]
 [-Mailbox <MailboxIdParameter>]
 [-Organization <OrganizationIdParameter>]
 [-ResidentFolders]
 [-Server <ServerIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PublicFolder
```

This example uses the Get-PublicFolder command without parameters to return the root public folder object (IPM\_SUBTREE).

### Example 2
```powershell
Get-PublicFolder -Identity \NON_IPM_SUBTREE -Recurse | Format-List Name
```

This example returns the names of all the system folders (which aren't shown by default), starting at the system folder root (\\NON\_IPM\_SUBTREE).

### Example 3
```powershell
Get-PublicFolder -Identity "\Legal\Documents\Pending Litigation"
```

This example returns the Pending Litigation public folder from \\Legal\\Documents\\.

### Example 4
```powershell
Get-PublicFolder -Identity "\Legal\Documents\Pending Litigation" -Recurse
```

This example returns the Pending Litigation public folder from \\Legal\\Documents\\ and all the public folders under the Pending Litigation public folder. Because the result size isn't specified, the command returns up to the maximum number of public folders, which is 10,000.

### Example 5
```powershell
Get-PublicFolder -Identity "\Legal\Documents\Pending Litigation" -Recurse -ResultSize Unlimited
```

This example returns the Pending Litigation public folder from \\Legal\\Documents\\ and all the public folders under the Pending Litigation public folder, without a limit on the number returned.

### Example 6
```powershell
Get-PublicFolder -Mailbox "Legal Department" -ResidentFolders
```

This example returns the public folders that reside in the public folder content mailbox Legal Department.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the name and path of the public folder you want to view. A valid value uses the syntax: `\Level1\Level2\...\LevenN\PublicFolder`. For example, `"\Customer Discussion"` or `"\Engineering\Customer Discussion"`.

```yaml
Type: PublicFolderIdParameter
Parameter Sets: GetChildren, Recurse, Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -GetChildren

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The GetChildren switch specifies whether to return only the children of the folder specified by the Identity parameter. You don't need to specify a value with this switch.

You can't use this switch with the Recurse or LostAndFound switches.

```yaml
Type: SwitchParameter
Parameter Sets: GetChildren
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recurse

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Recurse switch specifies whether to return the specified public folder and all its children. You don't need to specify a value with this switch.

You can't use this switch with the GetChildren or LostAndFound switches.

```yaml
Type: SwitchParameter
Parameter Sets: Recurse
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LostAndFound

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The LostAndFound switch specifies whether to return only orphaned folders that are located in \\NON\_IPM\_SUBTREE\\LOST\_AND\_FOUND. You don't need to specify a value with this switch.

The LOST\_AND\_FOUND folder holds missing folders that are recreated by the public folder hierarchy reconciliation process when the folder exists in a secondary public folder mailbox, but not in the primary.

You can't use this switch with the Identity parameter or the Recurse or LostAndFound switches.

```yaml
Type: SwitchParameter
Parameter Sets: LostAndFound
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Mailbox parameter specifies the identity of the hierarchy public folder mailbox. You can use any value that uniquely identifies the mailbox. For example:

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
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

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

### -ResidentFolders

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ResidentFolders switch specifies whether to return public folders that reside in a specific content public folder mailbox. You don't need to specify a value with this switch.

If you don't use this switch, the command will return only public folders whose contents reside in the primary hierarchy public folder mailbox.

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

### -ResultSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ResultSize parameter specifies the maximum number of results to return. The default maximum is 10,000. For no limit on the returned results, set this parameter to Unlimited. This parameter can only be passed in combination with the Recurse or GetChildren parameters.

```yaml
Type: Unlimited
Parameter Sets: GetChildren, Recurse, LostAndFound
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The Server parameter filters the results by the specified Exchange server. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

```yaml
Type: ServerIdParameter
Parameter Sets: GetChildren, Recurse, Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
