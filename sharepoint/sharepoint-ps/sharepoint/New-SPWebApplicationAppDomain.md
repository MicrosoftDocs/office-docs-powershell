---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPWebApplicationAppDomain

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

{{Fill in the Synopsis}}



## SYNTAX

```
New-SPWebApplicationAppDomain [-AppDomain] <String> -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Port <Int32>] [-SecureSocketsLayer] [-WhatIf]
 [-Zone <SPUrlZone>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

The New-SPWebApplicationAppDoman cmdlet was first introduced in the March 2013 Public Update.
For additional information about updates, see Updates for SharePoint 2013 Resource Center (http://technet.microsoft.com/en-us/sharepoint/jj891062.aspx)

Use the New-SPWebApplicationAppDomain cmdlet to create an AppDomain entry.
If you specify a port, the cmdlet adds a port binding to the Internet Information Services (IIS) site corresponding to the webapp/ zone combination.

**Below Content Applies To:**SharePoint Server 2016

{{Fill in the Description}}



## EXAMPLES

### ----------EXAMPLE 1------------ (SharePoint Server 2013)
```
C:\PS>New-SPWebApplicationAppDomain -AppDomain contosoapps.com -WebApplication http://www.contoso.com
```

Creates a new app domain for apps for SharePoint for the specified web application in the default zone.

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### ----------EXAMPLE 2------------ (SharePoint Server 2013)
```
C:\PS>New-SPWebApplicationAppDomain -AppDomain contosoapps.com -WebApplication http://www.contoso.com -Zone Internet -Port 10000
```

Creates a new app domain for apps for SharePoint for the specified web application in the internet zone at port 10000.

## PARAMETERS

### -AppDomain
**Below Content Applies To:**SharePoint Server 2013

Specifies the URI of the app domain.



**Below Content Applies To:**SharePoint Server 2016

{{Fill AppDomain Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WebApplication
**Below Content Applies To:**SharePoint Server 2013

Specifies the GUID, URI, or name of the web application for which the app domain is being configured.



**Below Content Applies To:**SharePoint Server 2016

{{Fill WebApplication Description}}



```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
**Below Content Applies To:**SharePoint Server 2013

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.



**Below Content Applies To:**SharePoint Server 2016

{{Fill AssignmentCollection Description}}



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
**Below Content Applies To:**SharePoint Server 2013

Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters



**Below Content Applies To:**SharePoint Server 2016

Prompts you for confirmation before running the cmdlet.



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

### -Port
**Below Content Applies To:**SharePoint Server 2013

Specifies the IIS port number to which the app domain will be assigned.
If no value is specified, the same port used by the web application for the zone is applied.



**Below Content Applies To:**SharePoint Server 2016

{{Fill Port Description}}



```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecureSocketsLayer
**Below Content Applies To:**SharePoint Server 2013

Specifies that the app domain will use Secured Sockets Layer (SSL) security.
If no value is specified, no SSL security will be used.



**Below Content Applies To:**SharePoint Server 2016

{{Fill SecureSocketsLayer Description}}



```yaml
Type: SwitchParameter
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
**Below Content Applies To:**SharePoint Server 2013

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters



**Below Content Applies To:**SharePoint Server 2016

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



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

### -Zone
**Below Content Applies To:**SharePoint Server 2013

Specifies the security zone to which the app domain will be assigned.

If no value is specified, Default is applied.



**Below Content Applies To:**SharePoint Server 2016

{{Fill Zone Description}}



```yaml
Type: SPUrlZone
Parameter Sets: (All)
Aliases: 
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

### System.String
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-SPWebApplicationAppDomain]()

[Remove-SPWebApplicationAppDomain]()

