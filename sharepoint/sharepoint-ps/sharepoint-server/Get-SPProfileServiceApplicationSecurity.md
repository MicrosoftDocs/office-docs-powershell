---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPProfileServiceApplicationSecurity
schema: 2.0.0
---

# Get-SPProfileServiceApplicationSecurity

## SYNOPSIS
Returns permission and identity information.

## SYNTAX

```
Get-SPProfileServiceApplicationSecurity -ProfileServiceApplicationProxy <SPServiceApplicationProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-SiteSubscription <SPSiteSubscriptionPipeBind>]
 [-Type <String>] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-SPProfileServiceApplicationSecurity cmdlet to display permission and identity information for the following User Profile objects:

- Read individual My Sites
- Use Personal Features
- Use Social Features
- Create Personal Site

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------------EXAMPLE-------------------- 
```
C:\PS>$UPAProxy = Get-SPServiceApplicationProxy -Identity "UPA proxy 1"

          C:\PS>Get- SPProfileServiceApplicationSecurity - ProfileServiceApplicationProxy $UPAProxy -Type MySiteReaderACL
```

This example displays MySite information on UPA Proxy 1.

## PARAMETERS

### -ProfileServiceApplicationProxy
Specifies the unique identifier for the proxy.

```yaml
Type: SPServiceApplicationProxyPipeBind
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

### -SiteSubscription
Specifies the account under which this service should run.
This parameter is mandatory in a hosted-environment and optional in a non-hosted environment.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Type
Specifies the type of object to display.

The type is any one of the following values:

- MySiteReaderACL
- MySiteHostReaderACL
- UserACL

```yaml
Type: String
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

## OUTPUTS

## NOTES

## RELATED LINKS

