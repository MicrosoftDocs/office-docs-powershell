---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPFileCheckedIn

## SYNOPSIS
Checks in a file

## SYNTAX 

```powershell
Set-PnPFileCheckedIn -Url <String>
                     [-CheckinType <CheckinType>]
                     [-Comment <String>]
                     [-Approve [<SwitchParameter>]]
                     [-Web <WebPipeBind>]
                     [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
PS:>Set-PnPFileCheckedIn -Url "/Documents/Contract.docx"
```

Checks in the file "Contract.docx" in the "Documents" library

### ------------------EXAMPLE 2------------------
```powershell
PS:>Set-PnPFileCheckedIn -Url "/Documents/Contract.docx" -CheckinType MinorCheckin -Comment "Smaller changes"
```

Checks in the file "Contract.docx" in the "Documents" library as a minor version and adds the check in comment "Smaller changes"

## PARAMETERS

### -Approve
Approve file

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -CheckinType
The check in type to use. Defaults to Major

```yaml
Type: CheckinType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Comment
The check in comment

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Url
The server relative url of the file to check in

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
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

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)