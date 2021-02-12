---
external help file: sharepointserver.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/remove-spexceldataprovider
applicable: SharePoint Server 2010, SharePoint Server 2013
title: Remove-SPExcelDataProvider
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer: 
---

# Remove-SPExcelDataProvider

## SYNOPSIS
Removes a data provider from Excel Services Application.


## SYNTAX

```
Remove-SPExcelDataProvider [-Identity] <SPExcelDataProviderPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Remove-SPExcelDataProvider` cmdlet removes a data provider that is stored on the list of safe data providers.
Excel Services Application refreshes external data connections only if the data provider for that connection is on the list of safe data providers.
Excel Services Application includes a set of common data providers on this list, so using cmdlets to modify safe data providers is typically done only in custom data connection scenarios.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### -----------------------EXAMPLE-----------------------------
```
C:\PS>$provider = Get-SPExcelServiceApplication -Identity "MyExcelService" | Get-SPExcelDataProvider | { where {$_.providerID -eq "MyCustomProvider"}

Remove-SPExcelDataProvider $provider
```

This example removes a custom data provider from the list of safe data providers that is on the Excel Services Application Web service application named MyExcelService.

Excel Services Application will no longer refresh any data connections that use this data provider.


## PARAMETERS

### -Identity
Specifies the SPExcelDataProvider object to remove.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh, or an instance of a valid SPExcelDataProvider object.

```yaml
Type: SPExcelDataProviderPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013

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
Applicable: SharePoint Server 2010, SharePoint Server 2013

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
Applicable: SharePoint Server 2010, SharePoint Server 2013

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
Applicable: SharePoint Server 2010, SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
