---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPAlternateURL
schema: 2.0.0
---

# Set-SPAlternateURL

## SYNOPSIS
Configures the specified alternate URL.


## SYNTAX

```
Set-SPAlternateURL [-Identity] <SPAlternateUrlPipeBind> [-Url <String>] [-Zone <SPUrlZone>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPAlternateUrl` cmdlet changes the URL or zone of the alternate URL specified by the Identity parameter.
This cmdlet can be used to change only the zone of internal URLs and cannot be used to change the zone of public URLs.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE 1------------------
```
PS C:\>Set-SPAlternateURL -Identity https://www.contoso.com -Zone "Internet"
```

This example changes the zone of the alternate URL https://www.contoso.com.


### ------------------EXAMPLE 2------------------
```
PS C:\>Set-SPAlternateURL -Identity https://www.contoso.com -Url https://sharepoint.contoso.com -Zone "Default"
```

This example changes the URL and zone of the alternate URL https://www.contoso.com.


### ------------------EXAMPLE 3------------------
```
PS C:\>Get-SPAlternateURL https://www.contoso.com | Set-SPAlternateURL -Zone "Internet"
```

This example changes the zone of the alternate URL https://www.contoso.com.


### ------------------EXAMPLE 4------------------
```
PS C:\>Get-SPWebApplication |%{ Get-SPAlternateURL -WebApplication $_ -Zone "Extranet" } | Set-SPAlternateURL -Zone "Intranet"
```

This example changes the zone of the alternate URL for the specified Web application from Extranet to Intranet.


## PARAMETERS

### -Identity
Specifies the URL or GUID of the alternate URL to change.

The type must be a valid URL, in the form http://server_name/WebApplication/site, or a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: SPAlternateUrlPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Url
Specifies the new alternate URL.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Zone
Sets the supplied alternate URL as one of the five zones.

The type must be any one of the following values: Default, Intranet, Internet, Extranet, or Custom.

```yaml
Type: SPUrlZone
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
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
