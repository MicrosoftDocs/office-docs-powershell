---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPUserSettingsProvider
schema: 2.0.0
---

# Remove-SPUserSettingsProvider

## SYNOPSIS
Removes a User Settings Provider.


## SYNTAX

```
Remove-SPUserSettingsProvider [-Identity] <SPUserSettingsProviderPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Use the `Remove-SPUserSettingsProvider` cmdlet to remove a User Settings Provider from the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ----------------------EXAMPLE-----------------------
```
C:\PS>Remove-SPUserSettingsProvider -Identity "234bf0ed-70db-4158-a332-4dfd683b4148"
```

This example removes a specific User Settings Provider by using the GUID, 234bf0ed-70db-4158-a332-4dfd683b4148.


## PARAMETERS

### -Identity
Specifies the GUID ID for a User Settings Provider to remove.

```yaml
Type: SPUserSettingsProviderPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-SPUserSettingsProvider](Get-SPUserSettingsProvider.md)

[New-SPUserSettingsProvider](New-SPUserSettingsProvider.md)

[Get-SPUserSettingsProviderManager](Get-SPUserSettingsProviderManager.md)
