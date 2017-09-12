---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Remove-SPEnterpriseSearchServiceApplicationSiteSettings

## SYNOPSIS
Cleans up search settings for a particular site collection, subscription, or search application.

## SYNTAX

```
Remove-SPEnterpriseSearchServiceApplicationSiteSettings [-Identity] <SiteSettingsPipeBind>
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-TenantId <Guid>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Remove-SPEnterpriseSearchServiceApplicationSiteSettings cmdlet to remove all search settings for the specified site collection, subscription, or search application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------EXAMPLE-------- (SharePoint Server 2013)
```
$app = Get-SPEnterpriseSearchServiceApplication

$GC = Start-SPAssignment

$s = $GC | Get-SPSite UrlOfASiteCollection

Remove-SPEnterpriseSearchServiceApplicationSiteSettings -Identity $s.ID.ToString() -SearchApplication $app

Stop-SPAssignment $GC
```

This example removes the search settings for the site collection referenced by $s in the search application referenced by $app.
$s is the site collection with URL "UrlOfSiteCollection", and $s.ID.ToString() is the string representation of the site ID.

### --------EXAMPLE-------- (SharePoint Server 2016)
```
C:\PS>$app = Get-SPEnterpriseSearchServiceApplication

$GC = Start-SPAssignment

$s = $GC | Get-SPSite UrlOfASiteCollection
Remove-SPEnterpriseSearchServiceApplicationSiteSettings -Identity $s.ID.ToString() -SearchApplication $app

Stop-SPAssignment $GC
```

This example removes the search settings for the site collection referenced by $s in the search application referenced by $app.
$s is the site collection with URL "UrlOfSiteCollection", and $s.ID.ToString() is the string representation of the site ID.

## PARAMETERS

### -Identity
Specifies the site collection to remove search settings from.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: SiteSettingsPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SearchApplication
Specifies the name of the search application.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantId
Specifies the tenant from which to remove search settings.
The type must be a valid GUID in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
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

[Online Version](http://technet.microsoft.com/EN-US/library/000b95e2-3198-42e9-a6e4-2398e803e023(Office.15).aspx)

[Upgrade-SPEnterpriseSearchServiceApplicationSiteSettings]()

