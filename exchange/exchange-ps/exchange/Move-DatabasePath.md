---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/move-databasepath
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Move-DatabasePath
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Move-DatabasePath

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Move-DatabasePath cmdlet to set a new path to the location of a database on the specified Mailbox server and to move the related files to that location.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Move-DatabasePath [-Identity] <DatabaseIdParameter> [-ConfigurationOnly] [-Confirm] [-DomainController <Fqdn>]
 [-EDBFilePath <EdbFilePath>] [-Force] [-LogFolderPath <NonRootLocalLongFullPath>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
When you use the Move-DatabasePath cmdlet, consider the following:

- This cmdlet fails if it's run while the database is being backed up.

- If the specified database is mounted when this cmdlet is run, the database is automatically dismounted and then remounted, and is unavailable to users while it's dismounted.

- In Exchange 2013 or earlier, you can only run this cmdlet on the affected Mailbox server. If you include the ConfigurationOnly parameter with the value $true, you can run the cmdlet on an administrator's workstation. This does not apply to Exchange 2016 or later (you can run the cmdlet anywhere).

- This cmdlet can't be run against replicated mailbox databases. To move the path of a replicated database, you must first remove all replicated copies, and then you can perform the move operation. After the move operation is complete, you can add copies of the mailbox database.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Move-DatabasePath -Identity MyDatabase01 -EdbFilePath C:\NewFolder\MyDatabase01.edb
```

This example sets a new path for the mailbox database specified by the mailbox database name. To perform the move operation, the database must be temporarily dismounted, making it inaccessible to all users. If the database is currently dismounted, it isn't remounted upon completion.

## PARAMETERS

### -Identity
The Identity parameter specifies the database that you want to move. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ConfigurationOnly
The ConfigurationOnly switch specifies whether the configuration of the database changes without moving any files. A value of $true changes the configuration. A value of $false changes the configuration and moves the files. The default value is $false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EDBFilePath
The EdbFilePath parameter specifies a new file path for the database. All current database files are moved to this location. The default location is \<ExchangeInstallDirectory\>\\Mailbox\\LocalCopies\\MBDatabase.edb. This file path can't be the same as the path for the backup copy of the database.

```yaml
Type: EdbFilePath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogFolderPath
The LogFolderPath parameter specifies the folder where log files are stored.

```yaml
Type: NonRootLocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EDBFilePath
The EdbFilePath parameter specifies a new file path for the database. All current database files are moved to this location. The default location is \<ExchangeInstallDirectory\>\\Mailbox\\LocalCopies\\MBDatabase.edb. This file path can't be the same as the path for the backup copy of the database.

```yaml
Type: EdbFilePath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
