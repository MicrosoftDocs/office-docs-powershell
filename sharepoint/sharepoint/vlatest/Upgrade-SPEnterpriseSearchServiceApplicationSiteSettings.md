---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/2cbb3074-6327-4fd7-ab14-b6b22baab6f2(Office.15).aspx
schema: 2.0.0
---

# Upgrade-SPEnterpriseSearchServiceApplicationSiteSettings

## SYNOPSIS
Upgrades search settings for a particular site collection.

## SYNTAX

```
Upgrade-SPEnterpriseSearchServiceApplicationSiteSettings -Identity <SPSitePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
Use the Upgrade-SPEnterpriseSearchServiceApplicationSiteSettings cmdlet to upgrade the search settings for specified site collection from 2010 to 2013 experience.
The upgrades include conversion of best bets to query rules.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------EXAMPLE-------- (SharePoint Server 2013)
```
$site= Get-SPSite http://test

Upgrade-SPEnterpriseSearchServiceApplicationSiteSettings -Identity $site
```

This example upgrades the search settings for the site collection referenced by $site.

### --------EXAMPLE-------- (SharePoint Server 2016)
```
C:\PS>$site= Get-SPSite http://test

C:\PS>Upgrade-SPEnterpriseSearchServiceApplicationSiteSettings -Identity $site
```

This example upgrades the search settings for the site collection referenced by $site.

## PARAMETERS

### -Identity
Specifies the site collection for which to upgrade search settings.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
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
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/2cbb3074-6327-4fd7-ab14-b6b22baab6f2(Office.15).aspx)

[Remove-SPEnterpriseSearchServiceApplicationSiteSettings]()

