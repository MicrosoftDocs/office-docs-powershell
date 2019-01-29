---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Remove-PublicFolderMailboxMigrationRequest
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Remove-PublicFolderMailboxMigrationRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Remove-PublicFolderMailboxMigrationRequest cmdlet to remove individual jobs from public folder migration batches that were created by using the New-MigrationBatch cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Identity
```
Remove-PublicFolderMailboxMigrationRequest [-Identity] <PublicFolderMailboxMigrationRequestIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Force]
 [-WhatIf] [<CommonParameters>]
```

### MigrationRequestQueue
```
Remove-PublicFolderMailboxMigrationRequest -RequestGuid <Guid> -RequestQueue <DatabaseIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Remove-PublicFolderMailboxMigrationRequest cmdlet is intended for troubleshooting and should be used under the direction of Microsoft Customer Service and Support.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-PublicFolderMailboxMigrationRequest -Identity \PublicFolderMailboxMigrationac6d9eb4-ee49-405f-b90d-04e9a258bd7e
```

This example removes the specified public folder mailbox migration request.

### ------------Example 2: Removing an orphaned public folder mailbox migration request -----------
```
Here's an example of an orphaned PublicFolderMailboxMigrationRequest and how to remove it.

When there is no migration batch:
`PS D:\tools\PSSession> Get-MigrationBatch`
`PS D:\tools\PSSession>`

However, the following public folder mailbox migration request is present, with no target mailbox associated:
`PS D:\tools\PSSession> Get-PublicFolderMailboxMigrationRequest`

|Name  |TargetMailbox  |Status  |
|---------|---------|---------|
|PFMailboxMigration2b14b2ad-1e7e-4cb9-a7b5-16b70b443fc5|         |Failed|

Or you can use the following command to list the public folder mailbox migration requests that do not have a designated target mailbox:

`Get-PublicFolderMailboxMigrationRequest | ?{$_.TargetMailbox -eq $null}`

For any orphaned requests that are returned, use `Remove-PublicFolderMailboxMigrationRequest`, as in the following example:

`Get-PublicFolderMailboxMigrationRequest | ?{$_.TargetMailbox -eq $null} | Remove-PublicFolderMailboxMigrationRequest`


### -------Example 3: Remove duplicate public folder mailbox migration tasks -----------

If you observe two or more public folder mailbox migration requests created for the same target mailbox, this means the public folder mailbox migration request is duplicated.

You can find duplicates by running the `Get-PublicFolderMailboxMigrationRequest` cmdlet. If a mailbox name is mentioned as a target mailbox more than once, then it means you have duplicate requests.

You can also use the following cmdlet to find duplicate requests:

`Get-PublicFolderMailboxMigrationRequest | group TargetMailbox |?{$_.Count -gt 1}`

If you do not get any output from the above command, then you do not have any duplicate mailbox migration requests.

[A sample script is provided here](https://gallery.technet.microsoft.com/scriptcenter/Remove-Duplicate-public-055f0e5e) to detect duplicate or orphaned public folder mailbox migration requests and also remove them.


## PARAMETERS

### -Identity
The Identity parameter specifies the public folder mailbox migration request that you want to remove. This value uses the syntax \\PublicFolderMailboxMigration\<GUID\> (for example, \\PublicFolderMailboxMigrationac6d9eb4-ee49-405f-b90d-04e9a258bd7e).

You can't use this parameter with the RequestGuid or RequestQueue parameters.

```yaml
Type: PublicFolderMailboxMigrationRequestIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RequestGuid
The RequestGuid parameter specifies the unique RequestGuid identifier of the request. To find the RequestGuid value, use the Get-PublicFolderMailboxMigrationRequest cmdlet.

If you use this parameter, you also need to use the RequestQueue parameter. You can't use either of these parameters with the Identity parameter.

```yaml
Type: Guid
Parameter Sets: MigrationRequestQueue
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestQueue
The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Database GUID

- Database name

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: MigrationRequestQueue
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
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

[Online Version](https://technet.microsoft.com/library/3921f9da-77c9-4943-b184-436a1a9875b3.aspx)
