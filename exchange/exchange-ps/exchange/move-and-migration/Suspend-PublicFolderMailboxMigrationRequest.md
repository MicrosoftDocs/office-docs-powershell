---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2016, Exchange Online
title: Suspend-PublicFolderMailboxMigrationRequest
schema: 2.0.0
monikerRange: "exchserver-ps-2016 || exchonline-ps"
---

# Suspend-PublicFolderMailboxMigrationRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Suspend-PublicFolderMailboxMigrationRequest cmdlet to suspend individual jobs in public folder migration batches that were created by using the New-MigrationBatch cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Suspend-PublicFolderMailboxMigrationRequest [-Identity] <PublicFolderMailboxMigrationRequestIdParameter>
 [-Confirm] [-DomainController <Fqdn>] [-SuspendComment <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Suspend-PublicFolderMailboxMigrationRequest -Identity \PublicFolderMailboxMigrationac6d9eb4-ee49-405f-b90d-04e9a258bd7e
```

This example suspends the specified public folder mailbox migration request.

## PARAMETERS

### -Identity
The Identity parameter specifies the public folder mailbox migration request that you want to suspend. This value uses the syntax \PublicFolderMailboxMigrationGUID (for example, \PublicFolderMailboxMigrationac6d9eb4-ee49-405f-b90d-04e9a258bd7e).

```yaml
Type: PublicFolderMailboxMigrationRequestIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuspendComment
The SuspendComment parameter specifies a descriptive reason for why you suspended the public folder mailbox migration. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2016, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/12ef145f-14d5-4b81-b189-d5ba80b52d9c.aspx)
