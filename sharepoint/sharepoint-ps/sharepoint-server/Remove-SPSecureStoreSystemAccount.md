---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPSecureStoreSystemAccount
schema: 2.0.0
---

# Remove-SPSecureStoreSystemAccount

## SYNOPSIS
Removes a user account from a designated list.


## SYNTAX

```
Remove-SPSecureStoreSystemAccount [-Identity] <SPSecureStoreSystemAccountPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the `Remove-SPSecureStoreSystemAccount` cmdlet to remove a user account from a designated list of accounts which will be considered a system account.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
C:\PS>Remove-SPSecureStoreSystemAccount -Identity contoso\jdoe
```

This example removes a specific user name jdoe by using the Identity parameter.


### -----------------------EXAMPLE 2-----------------------------
```
C:\PS>Get-SPSecureStoreSystemAccount | Where-Object -filter {$_.AccountName -eq 'Contoso\admin'} | Remove-SPSecureStoreSystemAccount
```

This example removes the admin, user from the contoso domain by filtering the results from the `Get-SPSecureStoreSystemAccount` cmdlet.


## PARAMETERS

### -Identity
Specifies the name, object, or GUID to remove.

```yaml
Type: SPSecureStoreSystemAccountPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Add-SPSecureStoreSystemAccount]()

[Get-SPSecureStoreSystemAccount]()
