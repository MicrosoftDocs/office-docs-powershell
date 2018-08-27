---
external help file: 
applicable: Project Server 2016
title: Remove-SPProjectWebInstanceData
schema: 2.0.0
---

# Remove-SPProjectWebInstanceData

## SYNOPSIS
Disassociates a Site Collection with the Project Server instance.


## SYNTAX

```
Remove-SPProjectWebInstanceData [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 -SiteCollection <SPSitePipeBind> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet disassociates the Project Server instance from the specified Site Collection, disabling the PWA Feature and removing Project content.

## EXAMPLES

### ----------------------EXAMPLE-----------------------
```
PS C:\>Remove-SPProjectWebInstanceData -SiteCollection http://contoso/sites/pwa
```

This example disassociates http://contoso/sites/pwa from the Project Server instance.


## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteCollection
The site collection to disassociate from the Project Server instance.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPSitePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
