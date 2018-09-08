---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010
title: New-PublicFolderDatabaseRepairRequest
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# New-PublicFolderDatabaseRepairRequest

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the New-PublicFolderDatabaseRepairRequest cmdlet to detect and fix replication issues in the public folder database. Public folders on the public folder database can still be accessed while the request is running. However, access isn't available to the public folder currently being repaired.

After you begin the repair request, it can't be stopped unless you dismount the database. For more information, see Dismount a Database.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-PublicFolderDatabaseRepairRequest [-Database] <DatabaseIdParameter>
 -CorruptionType <PublicFolderDatabaseCorruptionType[]> [-Confirm] [-DetectOnly] [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-PublicFolderDatabaseRepairRequest -Database PFDB01 -CorruptionType ReplState
```

This example detects and repairs replication issues in the public folder database PFDB01.

### -------------------------- Example 2 --------------------------
```
New-PublicFolderDatabaseRepairRequest -Database PFDB02 -CorruptionType ReplState -DetectOnly
```

This example only detects and reports on replication issues on public folder database PFDB02.

## PARAMETERS

### -CorruptionType
The CorruptionType parameter specifies the type of corruption that you want to detect and repair. You can use the following values:

ReplState

```yaml
Type: PublicFolderDatabaseCorruptionType[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
The Database parameter specifies the database on which you want to run this command. You can use the following values:

- GUID of the database

- Database name

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DetectOnly
The DetectOnly parameter specifies that you want this command to report errors, but not fix them. You don't have to specify a value with this parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010
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

[Online Version](https://technet.microsoft.com/library/9ad7ebc3-4a12-4af7-bbdf-ae1a6c2a7a84.aspx)
