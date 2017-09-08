---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Update-SPAppCatalogConfiguration

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Update-SPAppCatalogConfiguration [-Site] <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Force] [-SkipWebTemplateChecking] [-WhatIf]
```

## DESCRIPTION
Below Content Applies To: SharePoint Server 2013

Use the Update-SPAppCatalogConfiguration cmdlet to set a specific site collection as the App Catalog site collection.
The App Catalog site collection contains catalogs for Apps for SharePoint and Apps for Office.
It is used to help ITPro administrators distribute SharePoint Apps and Office Apps to their end users.
Each Web Application or Tenancy can have 1 App Catalog Site collection associated to it.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).
Below Content Applies To: SharePoint Server 2016

{{Fill in the Description}}

## EXAMPLES

### ---------------EXAMPLE----------- (SharePoint Server 2013)
```
C:\PS>Update-SPAppCatalogConfiguration -Site http://localhost/sites/appcatalog_1 -Force:$true -SkipWebTemplateChecking:$true
```

This example sets http://localhost/sites/appcatalog_1 as the app catalog site collection for the tenant it belongs to.

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Site
Below Content Applies To: SharePoint Server 2013

Specifies the URL or GUID of the site collection to be set as the app catalog site collection.
Below Content Applies To: SharePoint Server 2016

{{Fill Site Description}}

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Below Content Applies To: SharePoint Server 2013

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.
Below Content Applies To: SharePoint Server 2016

{{Fill AssignmentCollection Description}}

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
Below Content Applies To: SharePoint Server 2013

Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters Below Content Applies To: SharePoint Server 2016

Prompts you for confirmation before running the cmdlet.

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

### -Force
Below Content Applies To: SharePoint Server 2013

Specifies to force marking the site collection even if there are validation errors.
Below Content Applies To: SharePoint Server 2016

{{Fill Force Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipWebTemplateChecking
Below Content Applies To: SharePoint Server 2013

Specifies whether to skip checking if the template of the site is APCATALOG#0 Below Content Applies To: SharePoint Server 2016

{{Fill SkipWebTemplateChecking Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: SharePoint Server 2013

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters Below Content Applies To: SharePoint Server 2016

Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

### Microsoft.SharePoint.PowerShell.SPSitePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

