---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpnavigationnode
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPNavigationNode
---

# Get-PnPNavigationNode

## SYNOPSIS
Returns all or a specific navigation node

## SYNTAX 

### All nodes by location
```powershell
Get-PnPNavigationNode [-Location <NavigationType>]
                      [-Tree [<SwitchParameter>]]
                      [-Web <WebPipeBind>]
                      [-Connection <PnPConnection>]
```

### A single node by ID
```powershell
Get-PnPNavigationNode [-Id <Int>]
                      [-Tree [<SwitchParameter>]]
                      [-Web <WebPipeBind>]
                      [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPNavigationNode
```

Returns all navigation nodes in the quicklaunch navigation

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPNavigationNode -Location QuickLaunch
```

Returns all navigation nodes in the quicklaunch navigation

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPNavigationNode -Location TopNavigationBar
```

Returns all navigation nodes in the top navigation bar

### ------------------EXAMPLE 4------------------
```powershell
$node = Get-PnPNavigationNode -Id 2030
PS> $children = $node.Children
```

Returns the selected navigation node and retrieves any children

## PARAMETERS

### -Id
The Id of the node to retrieve

```yaml
Type: Int
Parameter Sets: A single node by ID

Required: False
Position: Named
Accept pipeline input: False
```

### -Location
The location of the nodes to retrieve. Either TopNavigationBar, QuickLaunch, SearchNav or Footer.

```yaml
Type: NavigationType
Parameter Sets: All nodes by location

Required: False
Position: Named
Accept pipeline input: False
```

### -Tree
Show a tree view of all navigation nodes

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)