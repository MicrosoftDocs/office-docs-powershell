---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: New-SPOnlineApplicationPrincipalManagementServiceApplicationProxy
schema: 2.0.0
---

# New-SPOnlineApplicationPrincipalManagementServiceApplicationProxy

## SYNOPSIS
Creates a new SharePoint Online management Application Proxy Name



## SYNTAX

```
New-SPOnlineApplicationPrincipalManagementServiceApplicationProxy
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DefaultProxyGroup] -Name <String>
 -OnlineTenantUri <String> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This Cmdlet is used to create a new Application Proxy name, for example usually when you run [this script](https://www.microsoft.com/en-us/download/confirmation.aspx?id=51490) you onboard your SharePoint Online (SPO) tenant and your SharePoint server cloud SSA to cloud hybrid search.


## EXAMPLES

### EXAMPLE 1
```powershell
New-SPOnlineApplicationPrincipalManagementServiceApplicationProxy -Name $SPO_MANAGEMENT_APPPROXY_NAME -OnlineTenantUri $PortalUrl -DefaultProxyGroup
```
Found the proxies for the tenant on the variable $PortalUrl on the Default Proxy Group.


## PARAMETERS

### -AssignmentCollection
After the creation of the new Principal Management Service Application proxy assign it to the collection.

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

### -DefaultProxyGroup
Search Proxies on the default Proxy Group

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

### -Name
SPO Management AppProxy Name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnlineTenantUri
Define the online Tenant URI.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS
[Introduction to the SharePoint Online management shell](https://support.office.com/en-us/article/introduction-to-the-sharepoint-online-management-shell-c16941c3-19b4-4710-8056-34c034493429)

[SharePoint Online Management Shell Download](https://www.microsoft.com/en-US/download/details.aspx?id=35588)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Start-SPOUserAndContentMove](Start-SPOUserAndContentMove.md)

[Full Download to Hybrid Scripts](https://www.microsoft.com/en-us/download/confirmation.aspx?id=51490)