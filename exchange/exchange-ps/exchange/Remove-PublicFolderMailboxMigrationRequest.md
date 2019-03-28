---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Remove-PublicFolderMailboxMigrationRequest
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Remove-PublicFolderMailboxMigrationRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

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
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-PublicFolderMailboxMigrationRequest -Identity \PublicFolderMailboxMigrationac6d9eb4-ee49-405f-b90d-04e9a258bd7e
```

This example removes the specified public folder mailbox migration request.

### -------------------------- Example 2 --------------------------
```
Get-PublicFolderMailboxMigrationRequest | ?{$_.TargetMailbox -eq $null}
```

This example returns public folder mailbox migration requests that don't have a target mailbox. To remove these orphaned migration requests, add " | Remove-PublicFolderMailboxMigrationRequest" to the end of the command.

### -------------------------- Example 3 --------------------------
```
Get-PublicFolderMailboxMigrationRequest | group TargetMailbox |?{$_.Count -gt 1}
```

This example returns duplicate public folder migration requests (requests created for the same target mailbox). If the command returns no results, then there are no duplicate migration requests.

A sample script is provided here: (https://gallery.technet.microsoft.com/scriptcenter/Remove-Duplicate-public-055f0e5e) to detect duplicate or orphaned public folder mailbox migration requests and also remove them.

## PARAMETERS

### -Identity
The Identity parameter specifies the public folder mailbox migration request that you want to remove. This value uses the syntax \\PublicFolderMailboxMigration\<GUID\> (for example, \\PublicFolderMailboxMigrationac6d9eb4-ee49-405f-b90d-04e9a258bd7e).

You can't use this parameter with the RequestGuid or RequestQueue parameters.

```yaml
Type: PublicFolderMailboxMigrationRequestIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/3921f9da-77c9-4943-b184-436a1a9875b3.aspx)
