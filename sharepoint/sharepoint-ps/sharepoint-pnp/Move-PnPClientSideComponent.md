---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/move-pnpclientsidecomponent
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
---

# Move-PnPClientSideComponent

## SYNOPSIS
Moves a Client-Side Component to a different section/column

## SYNTAX 

### Move to other section
```powershell
Move-PnPClientSideComponent -Section <Int>
                            -Page <ClientSidePagePipeBind>
                            -InstanceId <GuidPipeBind>
                            [-Position <Int>]
                            [-Web <WebPipeBind>]
                            [-Connection <SPOnlineConnection>]
```

### Move to other column
```powershell
Move-PnPClientSideComponent -Column <Int>
                            -Page <ClientSidePagePipeBind>
                            -InstanceId <GuidPipeBind>
                            [-Position <Int>]
                            [-Web <WebPipeBind>]
                            [-Connection <SPOnlineConnection>]
```

### Move within a column
```powershell
Move-PnPClientSideComponent -Position <Int>
                            -Page <ClientSidePagePipeBind>
                            -InstanceId <GuidPipeBind>
                            [-Web <WebPipeBind>]
                            [-Connection <SPOnlineConnection>]
```

### Move to other section and column
```powershell
Move-PnPClientSideComponent -Section <Int>
                            -Column <Int>
                            -Page <ClientSidePagePipeBind>
                            -InstanceId <GuidPipeBind>
                            [-Position <Int>]
                            [-Web <WebPipeBind>]
                            [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Moves a Client-Side Component to a different location on the page. Notice that the sections and or columns need to be present before moving the component.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Move-PnPClientSideComponent -Page Home -InstanceId a2875399-d6ff-43a0-96da-be6ae5875f82 -Section 1
```

Moves the specified component to the first section of the page.

### ------------------EXAMPLE 2------------------
```powershell
Move-PnPClientSideComponent -Page Home -InstanceId a2875399-d6ff-43a0-96da-be6ae5875f82 -Column 2
```

Moves the specified component to the second column of the current section.

### ------------------EXAMPLE 3------------------
```powershell
Move-PnPClientSideComponent -Page Home -InstanceId a2875399-d6ff-43a0-96da-be6ae5875f82 -Section 1 -Column 2
```

Moves the specified component to the first section of the page into the second column.

### ------------------EXAMPLE 4------------------
```powershell
Move-PnPClientSideComponent -Page Home -InstanceId a2875399-d6ff-43a0-96da-be6ae5875f82 -Section 1 -Column 2 -Position 2
```

Moves the specified component to the first section of the page into the second column and sets the column to position 2 in the list of webparts.

## PARAMETERS

### -Column
The column to move the web part to

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: Int
Parameter Sets: Move to other column, Move to other section and column

Required: True
Position: Named
Accept pipeline input: False
```

### -InstanceId
The instance id of the control. Use Get-PnPClientSideControl retrieve the instance ids.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: GuidPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -Page
The name of the page

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSidePagePipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Position
Change to order of the web part in the column

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: Int
Parameter Sets: Move to other column, Move to other section, Move to other section and column, Move within a column

Required: False
Position: Named
Accept pipeline input: False
```

### -Section
The section to move the web part to

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: Int
Parameter Sets: Move to other section, Move to other section and column

Required: True
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)