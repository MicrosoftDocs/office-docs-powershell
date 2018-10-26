---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Update-SPInfoPathAdminFileUrl
schema: 2.0.0
---

# Update-SPInfoPathAdminFileUrl

## SYNOPSIS
Updates InfoPath form templates (.xsn files) and universal data connections (.udcx files), including all .xsn files and .udcx files that were deployed by an administrator.

## SYNTAX

```
Update-SPInfoPathAdminFileUrl -Find <Uri> -Replace <Uri> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Scan] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Update-SPInfoPathAdminFileUrl` cmdlet updates data connections in administrator-approved InfoPath form templates (.xsn files) and universal data connections (.udcx files).
This allows for InfoPath data connections that reference the current farm to be updated when content is migrated to a different farm URL.
This cmdlet cannot update any references to URLs that exist in form template business logic (code).
Typically, this cmdlet is used with the `Import-SPInfoPathAdministratorFiles` cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------
```
PS C:\>Get-SPWebApplication http://contoso2010 | Update-SPInfoPathAdminFileUrl
-find "http://contoso2007" 
-replace "http://contoso2010"
```

This example updates data connections in administrator-approved InfoPath form templates and universal data connection files.
Data connections that reference http://contoso 2007 are updated to reference http://contoso2010.

## PARAMETERS

### -Find
Specifies the URL to find.

The type must be a valid URL, in the form http://previous_server_name.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Replace
Specifies the URL to find.

The type must be a valid URL, in the form http://server_name.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scan
Run the  tool and log the actions that can be taken.
No content is changed as a result of the scan.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
